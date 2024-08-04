const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Actores extends Model {}

Actores.init({
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true  
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "Actores",
    tableName: "actores", // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar createdAt y updatedAt
});

module.exports = Actores;