const Menu = require('./Menu');
const Entree = require('./Entree');

// Menu.hasMany(Entree, {
//   foreignKey: 'menu_id',
// });

// Entree.belongsTo(Menu, {
//   foreignKey: 'menu_id',
// });

module.exports = { Menu, Entree, Users };
