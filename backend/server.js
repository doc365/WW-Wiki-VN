const express = require('express');
// Sử dụng mssql (tedious driver) thường sử dụng dạng User, Password.
const tediousSql = require('mssql');
// Sử dụng msnodesqlv8 (msnodesqlv8 driver) thường sử dụng dạng Windows Authentication.
const msnodesqlv8Sql = require('mssql/msnodesqlv8');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

app.use(express.json());

const config = require('./config/env.js');  // Import biến config chứa các thông số của database.

// Kiểm tra nếu có user và password
let sqlClient;

if (config.user && config.password) {
    // Sử dụng tedious (mặc định của mssql)
    sqlClient = tediousSql;
    config.driver = 'tedious';  // Sử dụng tedious nếu có user và password
} else {
    // Sử dụng msnodesqlv8 nếu không có user và password
    sqlClient = msnodesqlv8Sql;
    config.driver = 'msnodesqlv8';  // Sử dụng msnodesqlv8 nếu không có user và password
}

const pool = new sqlClient.ConnectionPool(config);
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

// Get character by ID
app.get('/api/characters/:id', async (req, res) => {
    try {
        const result = await executeQuery(`
            SELECT Id, Name, Attribute, Weapon_type, Rarity, SigWea, 
                   Stat, Tag, Skill_id, Description
            FROM Characters 
            WHERE Id = @Id`,
            [{
                name: 'Id',
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
app.get('/api', async (req, res) => {
    try {
        const result = await executeQuery(`
            SELECT Id, Name, Attribute, Weapon_type, Rarity, SigWea, 
                   Stat, Tag, Skill_id, Description 
            FROM Characters
        `);
        res.json({ data: result.recordset });
    } catch (err) {
        console.error('Error executing test endpoint query:', err);
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  