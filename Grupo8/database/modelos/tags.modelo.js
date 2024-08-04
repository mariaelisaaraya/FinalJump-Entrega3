const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Tags extends Model {}

Tags.init({
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true  
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "Tags",
    tableName: "tags", // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar createdAt y updatedAt
});

module.exports = Tags;
