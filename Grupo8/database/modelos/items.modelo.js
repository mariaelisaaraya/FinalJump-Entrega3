const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Items extends Model {}

Items.init({
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true  
    },
    poster: {
        type: DataTypes.STRING,
        allowNull: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: true
    },
    genero_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Genero', // nombre de la tabla de Genero
            key: 'id'
        }
    },
    resumen: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    trailer: {
        type: DataTypes.STRING,
        allowNull: true
    },
    temporadas: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    duracion: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "Items",
    tableName: "items", // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar createdAt y updatedAt
});

module.exports = Items;
