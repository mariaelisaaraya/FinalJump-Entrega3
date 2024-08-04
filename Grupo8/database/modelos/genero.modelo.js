const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Genero extends Model {}

Genero.init({
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true  
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "Genero",
    tableName: "genero", // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar createdAt y updatedAt
});

module.exports = Genero;