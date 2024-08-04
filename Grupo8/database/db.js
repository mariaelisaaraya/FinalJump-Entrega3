const { Sequelize } = require('sequelize');
const { database } = require('./config');

const sequelize = new Sequelize(
    database.DB_NAME,
    database.DB_USER,
    database.DB_PASS,
    {
        host: database.DB_HOST,
        port: database.DB_PORT,
        dialect: database.dialect
       
    }
);


sequelize.authenticate().then(() => {
   console.log('Conexión a base de datos exitosa.');
}).catch((error) => {
   console.error('No fue posible conectarse a la base de datos: ', error);
});

module.exports = sequelize;