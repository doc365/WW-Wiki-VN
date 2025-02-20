const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors');
const app = express();

// Cache for storing frequently accessed data
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Enable CORS
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Improved database connection handling
const pool = new sql.ConnectionPool({
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
});
const poolConnect = pool.connect();

// Connect to the database
pool.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Successfully connected to WutheringWavesDB5 on MUDDY server');
    }
});

// Enhanced error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
        success: false,
        error: err.message || 'Internal Server Error'
    });
});

// Optimized query execution with caching
async function executeQuery(query, params = [], cacheKey = null) {
    if (cacheKey && cache.has(cacheKey)) {
        const cached = cache.get(cacheKey);
        if (Date.now() - cached.timestamp < CACHE_DURATION) {
            return cached.data;
        }
        cache.delete(cacheKey);
    }

    await poolConnect;
    const request = pool.request();
    params.forEach(param => request.input(param.name, param.type, param.value));
    
    const result = await request.query(query);
    
    if (cacheKey) {
        cache.set(cacheKey, {
            timestamp: Date.now(),
            data: result
        });
    }
    
    return result;
}

// Get character details by ID with ALL related data
app.get('/api/characters/:id', async (req, res, next) => {
    try {
        const cacheKey = `character_${req.params.id}`;
        const result = await executeQuery(
            `SELECT 
                c.CharacterID,
                c.CharacterName,
                c.Attribute,
                c.WeaponType,
                c.Rarity,
                (
                    SELECT 
                        cls.Level, 
                        cls.RankID,
                        cls.HP, 
                        cls.ATK, 
                        cls.DEF,
                        ISNULL(cls.ER, 100.00) as EnergyRecharge,
                        ISNULL(cls.CritRate, 5.00) as CritRate,
                        ISNULL(cls.CritDamage, 150.00) as CritDamage,
                        rl.LevelMin,
                        rl.LevelMax,
                        ml.EXP_Required
                    FROM Character_Level_Stats cls
                    JOIN Rank_Levels rl ON cls.RankID = rl.RankID
                    LEFT JOIN Milestone_Levels ml ON ml.RankID = cls.RankID
                    WHERE cls.CharacterID = c.CharacterID
                    FOR JSON PATH
                ) as LevelStats,
                (
                    SELECT t.TagID, t.TagName, t.TagDescription
                    FROM Character_Tags ct
                    JOIN Tags t ON ct.TagID = t.TagID
                    WHERE ct.CharacterID = c.CharacterID
                    FOR JSON PATH
                ) as CharacterTags,
                (
                    SELECT s.SkillID, s.SkillName, s.SkillType, s.SkillDescription,
                           (
                               SELECT slm.Level as SkillLevel,
                                      m.MaterialID, m.MaterialName, 
                                      m.MaterialType, m.Rarity as MaterialRarity,
                                      m.ValueNumber, slm.Quantity
                               FROM Skill_Level_Materials slm
                               JOIN Materials m ON slm.MaterialID = m.MaterialID
                               WHERE slm.SkillID = s.SkillID
                               FOR JSON PATH
                           ) as SkillMaterials
                    FROM Skills s
                    WHERE s.CharacterID = c.CharacterID
                    FOR JSON PATH
                ) as CharacterSkills,
                (
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
                    WHERE csb.CharacterID = c.CharacterID
                    FOR JSON PATH
                ) as StatBonuses
            FROM Characters c
            WHERE c.CharacterID = @Id`,
            [{ name: 'Id', type: sql.Int, value: parseInt(req.params.id) }],
            cacheKey
        );

        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'Character not found' });
        }

        // Process each JSON string field
        const character = result.recordset[0];
        
        try {
            character.LevelStats = JSON.parse(character.LevelStats || '[]');
            character.CharacterTags = JSON.parse(character.CharacterTags || '[]');
            character.CharacterSkills = JSON.parse(character.CharacterSkills || '[]');
            character.StatBonuses = JSON.parse(character.StatBonuses || '[]');

            // Process skill materials for each skill
            character.CharacterSkills = character.CharacterSkills.map(skill => ({
                ...skill,
                SkillMaterials: JSON.parse(skill.SkillMaterials || '[]')
            }));
        } catch (parseError) {
            console.error('Error parsing JSON fields:', parseError);
            return res.status(500).json({ error: 'Error processing character data' });
        }

        res.json({
            success: true,
            data: character
        });

    } catch (err) {
        console.error('Error fetching character details:', err);
        res.status(500).json({ error: err.message });
    }
});

// Get all characters with their base details
app.get('/api/characters', async (req, res) => {
    try {
        const result = await executeQuery(`
            SELECT 
                c.CharacterID,
                c.CharacterName,
                c.Attribute,
                c.WeaponType,
                c.Rarity
            FROM Characters c
            ORDER BY c.CharacterID
        `);

        if (!result.recordset) {
            throw new Error('No data returned from database');
        }

        res.json({
            success: true,
            data: result.recordset
        });
    } catch (err) {
        console.error('Error fetching all characters:', err);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch characters',
            details: err.message 
        });
    }
});

// Get all milestone levels and required EXP
app.get('/api/milestone_levels', async (req, res) => {
    try {
        const result = await executeQuery(`
            SELECT 
                ml.RankID,
                ml.EXP_Required,
                rl.LevelMin,
                rl.LevelMax
            FROM Milestone_Levels ml
            JOIN Rank_Levels rl ON ml.RankID = rl.RankID
            ORDER BY ml.RankID ASC
        `);
        res.json({ data: result.recordset });
    } catch (err) {
        console.error('Error fetching milestone levels:', err);
        res.status(500).json({ error: err.message });
    }
});


// Add new endpoint for materials
app.get('/api/materials', async (req, res) => {
    try {
        const result = await executeQuery(`
            SELECT 
                MaterialID,
                MaterialName,
                MaterialType,
                ValueNumber,
                Rarity
            FROM Materials
            ORDER BY MaterialType, Rarity DESC, MaterialName
        `);
        res.json({ data: result.recordset });
    } catch (err) {
        console.error('Error fetching materials:', err);
        res.status(500).json({ error: err.message });
    }
});

// Graceful shutdown handling
process.on('SIGTERM', async () => {
    console.log('Received SIGTERM. Closing HTTP server and DB pool...');
    await pool.close();
    process.exit(0);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
