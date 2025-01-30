// Install required packages:
// npm install express mssql cors dotenv

// server.js
const express = require('express');
const sql = require('mssql');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database configuration using Windows Authentication
const config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: true,
        trustServerCertificate: true, // for local development
        trustedConnection: true,
        enableArithAbort: true,
        integratedSecurity: true // This enables Windows Authentication
    }
};

// Create a connection pool
const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

// Generic query function
async function executeQuery(query, params = []) {
    await poolConnect;
    const request = pool.request();
    
    // Add parameters if any
    params.forEach(param => {
        request.input(param.name, param.type, param.value);
    });
    
    return request.query(query);
}

// Example API endpoints - modify these based on your tables
app.get('/api/data', async (req, res) => {
    try {
        // Replace 'YourTable' with your actual table name
        const result = await executeQuery('SELECT * FROM YourTable');
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.post('/api/data', async (req, res) => {
    try {
        const { field1, field2 } = req.body;
        // Replace with your actual table and column names
        const result = await executeQuery(
            'INSERT INTO YourTable (Field1, Field2) VALUES (@field1, @field2)',
            [
                { name: 'field1', type: sql.VarChar, value: field1 },
                { name: 'field2', type: sql.VarChar, value: field2 }
            ]
        );
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));