const Actores = require('./actores.modelo');
const Items = require('./items.modelo');
const Tags = require('./tags.modelo');
const Items_Reparto = require('./items_repartos.modelo')
const Items_Tags = require('./items_tags.modelo');
const Genero = require('./genero.modelo')


Items.belongsToMany(Actores, { through: Items_Reparto });
Actores.belongsToMany(Items, { through: Items_Reparto });

Items.belongsToMany(Tags, { through: Items_Tags });
Tags.belongsToMany(Items, { through: Items_Tags });

Genero.hasMany(Items, { foreignKey: 'genero_id' });
Items.belongsTo(Genero, { foreignKey: 'genero_id' });

module.exports = { Actores, Items, Tags, Items_Reparto, Items_Tags, Genero };
