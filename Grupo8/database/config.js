module.exports = {
    database: {
        DB_HOST: process.env.DB_HOST || 'localhost',
        DB_USER: process.env.DB_USER || 'root',
        DB_PASS: process.env.DB_PASS || '',
        DB_NAME: process.env.DB_NAME || 'Trailerflix',
        DB_PORT: process.env.DB_PORT || 3306,
        dialect: "mysql"
    }
}