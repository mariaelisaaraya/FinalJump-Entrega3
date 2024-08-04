const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Items_Tags = sequelize.define('Items_Tags', {
    itemId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'items', // nombre de la tabla de Items
            key: 'id'
        },
        primaryKey: true
    },
    tagId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tags', // nombre de la tabla de tags
            key: 'id'
        },
        primaryKey: true
    }
}, {
    timestamps: false
});

module.exports = Items_Tags;