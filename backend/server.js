const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: ["http://localhost:5173/"] }));
app.use(express.json());

// Database configuration for Windows Authentication
const config = {
  server: 'MUDDY',  // Your server name from the image
  database: 'WebDB', // Your database name from the image
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

// Endpoint to fetch characters data
app.get('/api', async (req, res) => {
  try {
    const result = await executeQuery('SELECT * FROM Characters');
    res.json({ characters: result.recordset }); // Return characters data
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));