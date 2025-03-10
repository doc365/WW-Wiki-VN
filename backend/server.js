const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors');
const app = express();

// Environment variables (consider moving to .env file)
const CONFIG = {
    PORT: 5000,
    CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
    DB: {
        server: 'MUDDY',
        database: 'WutheringWavesDB5',
        options: {
            trustedConnection: true,
            enableArithAbort: true,
            trustServerCertificate: true
        },
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        }
    },
    CORS: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
        credentials: true
    },
    CACHE: {
        MAX_ITEMS: 1000,  // Maximum number of items in cache
        CLEANUP_INTERVAL: 60000  // Cleanup interval in ms
    }
};

// Cache implementation with automatic cleanup
class Cache {
    constructor(duration) {
        this.store = new Map();
        this.duration = duration;
        this.stats = { hits: 0, misses: 0 };
        
        setInterval(() => this.cleanup(), CONFIG.CACHE.CLEANUP_INTERVAL);
    }

    set(key, value) {
        if (this.store.size >= CONFIG.CACHE.MAX_ITEMS) {
            this.evictOldest();
        }
        this.store.set(key, {
            timestamp: Date.now(),
            data: value
        });
    }

    get(key) {
        const entry = this.store.get(key);
        if (!entry) {
            this.stats.misses++;
            return null;
        }
        
        if (Date.now() - entry.timestamp > this.duration) {
            this.store.delete(key);
            this.stats.misses++;
            return null;
        }
        
        this.stats.hits++;
        return entry.data;
    }

    evictOldest() {
        const oldest = [...this.store.entries()]
            .reduce((a, b) => a[1].timestamp < b[1].timestamp ? a : b);
        if (oldest) this.store.delete(oldest[0]);
    }

    clear() {
        this.store.clear();
        this.stats = { hits: 0, misses: 0 };
    }

    getStats() {
        return {
            ...this.stats,
            size: this.store.size,
            hitRatio: this.stats.hits / (this.stats.hits + this.stats.misses) || 0
        };
    }

    cleanup() {
        const now = Date.now();
        for (const [key, entry] of this.store.entries()) {
            if (now - entry.timestamp > this.duration) {
                this.store.delete(key);
            }
        }
    }
}

const cache = new Cache(CONFIG.CACHE_DURATION);

// Middleware setup
app.use(cors(CONFIG.CORS));
app.use(express.json());

// Database connection setup
const pool = new sql.ConnectionPool(CONFIG.DB);
let poolConnect = pool.connect();

pool.on('error', err => {
    console.error('Database pool error:', err);
    // Attempt to reconnect
    poolConnect = pool.connect();
});

// Query execution with improved error handling and caching
async function executeQuery(query, params = [], cacheKey = null) {
    try {
        if (cacheKey) {
            const cachedResult = cache.get(cacheKey);
            if (cachedResult) return cachedResult;
        }

        await poolConnect;
        const request = pool.request();
        
        params.forEach(param => {
            if (!param.name || !param.type) {
                throw new Error('Invalid parameter format');
            }
            request.input(param.name, param.type, param.value);
        });
        
        const result = await request.query(query);
        
        if (cacheKey) {
            cache.set(cacheKey, result);
        }
        
        return result;
    } catch (error) {
        console.error('Query execution error:', error);
        throw new Error('Database query failed: ' + error.message);
    }
}

// Character routes
const characterRoutes = {
    async getById(req, res) {
        try {
            const { id } = req.params;
            if (!id || isNaN(parseInt(id))) {
                return res.status(400).json({ error: 'Invalid character ID' });
            }

            const cacheKey = `character_${id}`;
            const result = await executeQuery(`
                WITH LevelStatsCTE AS (
                    SELECT 
                        JSON_QUERY((
                            SELECT cls.Level, cls.RankID, cls.HP, cls.ATK, cls.DEF,
                                ISNULL(cls.ER, 100.00) as EnergyRecharge,
                                ISNULL(cls.CritRate, 5.00) as CritRate,
                                ISNULL(cls.CritDamage, 150.00) as CritDamage,
                                rl.LevelMin, rl.LevelMax, ml.EXP_Required
                            FROM Character_Level_Stats cls
                            JOIN Rank_Levels rl ON cls.RankID = rl.RankID
                            LEFT JOIN Milestone_Levels ml ON ml.RankID = cls.RankID
                            WHERE cls.CharacterID = @Id
                            FOR JSON PATH
                        )) as LevelStats
                ),
                TagsCTE AS (
                    SELECT 
                        JSON_QUERY((
                            SELECT t.TagName
                            FROM Character_Tags ct
                            JOIN Tags t ON ct.TagID = t.TagID
                            WHERE ct.CharacterID = @Id
                            FOR JSON PATH
                        )) as CharacterTags
                ),
                SkillsCTE AS (
                    SELECT 
                        JSON_QUERY((
                            SELECT s.SkillID, s.SkillName, s.SkillType, s.SkillDescription,
                                (
                                    SELECT slm.Level, m.MaterialID, m.MaterialName,
                                        m.MaterialType, m.Rarity as MaterialRarity,
                                        m.ValueNumber, slm.Quantity
                                    FROM Skill_Level_Materials slm
                                    JOIN Materials m ON slm.MaterialID = m.MaterialID
                                    WHERE slm.SkillID = s.SkillID
                                    FOR JSON PATH
                                ) as SkillMaterials
                            FROM Skills s
                            WHERE s.CharacterID = @Id
                            FOR JSON PATH
                        )) as CharacterSkills
                ),
                StatBonusCTE AS (
                    SELECT 
                        JSON_QUERY((
                            SELECT csb.CharacterStatBonusID,
                                sbt1.StatBonusName as Bonus1Name,
                                sbt1.Milestone1_Percentage as Bonus1_M1_Percentage,
                                sbt1.Milestone2_Percentage as Bonus1_M2_Percentage,
                                sbt2.StatBonusName as Bonus2Name,
                                sbt2.Milestone1_Percentage as Bonus2_M1_Percentage,
                                sbt2.Milestone2_Percentage as Bonus2_M2_Percentage
                            FROM Character_Stat_Bonus csb
                            JOIN Stat_Bonus_Types sbt1 ON csb.Bonus1ID = sbt1.StatBonusID
                            JOIN Stat_Bonus_Types sbt2 ON csb.Bonus2ID = sbt2.StatBonusID
                            WHERE csb.CharacterID = @Id
                            FOR JSON PATH
                        )) as StatBonuses
                )
                SELECT 
                    c.CharacterID,
                    c.CharacterName,
                    c.Attribute,
                    c.WeaponType,
                    c.Rarity,
                    ls.LevelStats,
                    t.CharacterTags,
                    s.CharacterSkills,
                    sb.StatBonuses
                FROM Characters c
                CROSS APPLY LevelStatsCTE ls
                CROSS APPLY TagsCTE t
                CROSS APPLY SkillsCTE s
                CROSS APPLY StatBonusCTE sb
                WHERE c.CharacterID = @Id`,
                [{ name: 'Id', type: sql.Int, value: parseInt(id) }],
                cacheKey
            );

            if (!result.recordset.length) {
                return res.status(404).json({ error: 'Character not found' });
            }

            const character = result.recordset[0];
            const jsonFields = ['LevelStats', 'CharacterTags', 'CharacterSkills', 'StatBonuses'];
            
            jsonFields.forEach(field => {
                try {
                    character[field] = JSON.parse(character[field] || '[]');
                    if (field === 'CharacterSkills') {
                        character[field] = character[field].map(skill => ({
                            ...skill,
                            SkillMaterials: JSON.parse(skill.SkillMaterials || '[]')
                        }));
                    }
                } catch (error) {
                    console.error(`Error parsing ${field}:`, error);
                    character[field] = [];
                }
            });

            res.json({ success: true, data: character });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getAll(req, res) {
        try {
            const result = await executeQuery(
                `SELECT 
                    c.CharacterID,
                    c.CharacterName,
                    c.Attribute,
                    c.WeaponType,
                    c.Rarity
                FROM Characters c
                ORDER BY c.CharacterID`,
                [],
                'all_characters'
            );

            res.json({
                success: true,
                data: result.recordset
            });
        } catch (error) {
            res.status(500).json({ 
                success: false,
                error: error.message 
            });
        }
    }
};

// Material routes
const materialRoutes = {
    async getAll(req, res) {
        try {
            const result = await executeQuery(
                `SELECT 
                    MaterialID,
                    MaterialName,
                    MaterialType,
                    ValueNumber,
                    Rarity
                FROM Materials
                ORDER BY MaterialType, Rarity DESC, MaterialName`,
                [],
                'all_materials'
            );

            res.json({ success: true, data: result.recordset });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

// Milestone routes
const milestoneRoutes = {
    async getAll(req, res) {
        try {
            const result = await executeQuery(
                `SELECT 
                    ml.RankID,
                    ml.EXP_Required,
                    rl.LevelMin,
                    rl.LevelMax
                FROM Milestone_Levels ml
                JOIN Rank_Levels rl ON ml.RankID = rl.RankID
                ORDER BY ml.RankID ASC`,
                [],
                'all_milestones'
            );

            res.json({ success: true, data: result.recordset });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

// Route setup
app.get('/api/characters/:id', characterRoutes.getById);
app.get('/api/characters', characterRoutes.getAll);
app.get('/api/materials', materialRoutes.getAll);
app.get('/api/milestone_levels', milestoneRoutes.getAll);

// Global error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(err.status || 500).json({
        success: false,
        error: process.env.NODE_ENV === 'production' 
            ? 'Internal server error'
            : err.message
    });
});

// Graceful shutdown
async function shutdown(signal) {
    console.log(`Received ${signal}. Starting graceful shutdown...`);
    
    try {
        await pool.close();
        console.log('Database pool closed');
        
        process.exit(0);
    } catch (error) {
        console.error('Error during shutdown:', error);
        process.exit(1);
    }
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

// Start server
app.listen(CONFIG.PORT, () => {
    console.log(`Server running on port ${CONFIG.PORT}`);
    console.log(`Connected to ${CONFIG.DB.database} on ${CONFIG.DB.server}`);
});

module.exports = app;