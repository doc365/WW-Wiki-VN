const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors');
const app = express();

// Enable CORS for the frontend application
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Configure the database connection
const pool = new sql.ConnectionPool({
    server: 'MUDDY',
    database: 'WebDB',
    options: {
        trustedConnection: true
    }
});
const poolConnect = pool.connect();

// Connect to the database
pool.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Successfully connected to WebDB on MUDDY server');
    }
});

// Function to execute SQL queries
async function executeQuery(query, params = []) {
    await poolConnect;
    const request = pool.request();
    
    // Add parameters to the SQL request
    params.forEach(param => {
        request.input(param.name, param.type, param.value);
    });
    
    return request.query(query);
}

// Endpoint to get character details by ID
app.get('/api/characters/:id', async (req, res) => {
    try {
        const result = await executeQuery(`
            SELECT c.Id, c.Name, c.Attribute, c.Weapon_type, c.Rarity, c.SigWea, 
                   c.Tag, c.Skill_id, c.Description,
                   ISNULL(s.HP, 0) as HP, 
                   ISNULL(s.ATK, 0) as ATK, 
                   ISNULL(s.DEF, 0) as DEF, 
                   ISNULL(s.ER, 0) as ER, 
                   ISNULL(s.CR, 0) as CR, 
                   ISNULL(s.CD, 0) as CD
            FROM Characters c
            LEFT JOIN dbo.Stat s ON s.Id = @Id
            WHERE c.Id = @Id`,
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

// Endpoint to get all characters
app.get('/api', async (req, res) => {
    try {
        const result = await executeQuery(`
            SELECT c.Id, c.Name, c.Attribute, c.Weapon_type, c.Rarity, c.SigWea, 
                   c.Tag, c.Skill_id, c.Description,
                   ISNULL(s.HP, 0) as HP, 
                   ISNULL(s.ATK, 0) as ATK, 
                   ISNULL(s.DEF, 0) as DEF, 
                   ISNULL(s.ER, 0) as ER, 
                   ISNULL(s.CR, 0) as CR, 
                   ISNULL(s.CD, 0) as CD
            FROM Characters c
            LEFT JOIN dbo.Stat s ON s.Id = c.Id
        `);
        res.json({ data: result.recordset });
    } catch (err) {
        console.error('Error executing test endpoint query:', err);
        res.status(500).json({ error: err.message });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;