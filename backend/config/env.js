require('dotenv').config(); // Load biến môi trường từ .env

const config = {
    server: process.env.MSSQL_URL || 'MUDDY',
    port: process.env.PORT || 5000,
    database: process.env.DB_NAME || 'WebDB',
    driver: process.env.DB_DRIVER || 'msnodesqlv8',
    options: {
        trustedConnection: !process.env.DB_USER,  // Nếu không có DB_USER thì dùng Windows Authentication
        trustServerCertificate: true,
        enableArithAbort: true,
    },
};

// Nếu có DB_USER và DB_PASSWORD, thêm vào config
if (process.env.DB_USER && process.env.DB_PASSWORD) {
    config.user = process.env.DB_USER;
    config.password = process.env.DB_PASSWORD;
}

module.exports = config;