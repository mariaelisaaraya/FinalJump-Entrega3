const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Items_Reparto = sequelize.define('items_repartos', {
    itemId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'items', // nombre de la tabla de Items
            key: 'id'
        },
        primaryKey: true
    },
    actoreId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'actores', // nombre de la tabla de Actores
            key: 'id'
        },
        primaryKey: true
    }
}, {
    timestamps: false
});

module.exports = Items_Reparto;
