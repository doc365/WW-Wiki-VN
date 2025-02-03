const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Corrected CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', // Removed trailing slash
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

app.use(express.json());

// Database configuration for Windows Authentication
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

// Generic query function
async function executeQuery(query, params = []) {
    await poolConnect;
    const request = pool.request();
    
    params.forEach(param => {
        request.input(param.name, param.type, param.value);
    });
    
    return request.query(query);
}

app.get('/api/characters', async (req, res) => {
  try {
      const result = await executeQuery('SELECT * FROM Characters');
      res.json(result.recordset);  // Return just the recordset array
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
  }
});

app.get('/api/characters/:id', async (req, res) => {
  try {
      const result = await executeQuery('SELECT * FROM Characters WHERE id = @id', [
          { name: 'id', type: sql.Int, value: parseInt(req.params.id) }
      ]);
      
      if (result.recordset.length === 0) {
          return res.status(404).json({ error: 'Character not found' });
      }
      
      res.json(result.recordset[0]);  // Return the single character
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
  }
});