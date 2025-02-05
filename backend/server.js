const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

app.use(express.json());

const config = {
    server: 'MUDDY',
    database: 'WebDB',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true,
        trustServerCertificate: true,
        enableArithAbort: true,
    },
};

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

pool.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Successfully connected to WebDB on MUDDY server');
    }
});

async function executeQuery(query, params = []) {
    await poolConnect;
    const request = pool.request();
    
    params.forEach(param => {
        request.input(param.name, param.type, param.value);
    });
    
    return request.query(query);
}

// Get all characters
app.get('/api/characters', async (req, res) => {
    try {
        const result = await executeQuery(`
            SELECT Char_id, Name, Attribute, Weapon_type, Rarity, SigWea, 
                   Stat, Tag, Skill_id, Description, Image 
            FROM Characters
        `);
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Get character by ID
app.get('/api/characters/:id', async (req, res) => {
    try {
        const result = await executeQuery(`
            SELECT Char_id, Name, Attribute, Weapon_type, Rarity, SigWea, 
                   Stat, Tag, Skill_id, Description, Image 
            FROM Characters 
            WHERE Char_id = @id`,
            [{
                name: 'id',
                type: sql.Int,
                value: parseInt(req.params.id)
            }]
        );
        
        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'Character not found' });
        }
        
        res.json(result.recordset[0]);
    } catch (err) {
        console.error('Error fetching character by ID:', err);
        res.status(500).json({ error: err.message });
    }
});


// Test endpoint
app.get('/api', (req, res) => { 
    res.json({ message: 'API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));