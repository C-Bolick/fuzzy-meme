// const Menu = require('./Menu');
// const Entree = require('./Entree');

// // Menu.hasMany(Entree, {
// //   foreignKey: 'menu_id',
// // });

// // Entree.belongsTo(Menu, {
// //   foreignKey: 'menu_id',
// // });

// module.exports = { Menu, Entree };


const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Order = require('./Order');

module.exports = { User, Product, Category, Order };
