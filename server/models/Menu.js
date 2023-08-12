// const { Model, DataTypes, INTEGER } = require('sequelize');
// const sequelize = require('../config/connection');

// class Menu extends Model { }

// Menu.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false,
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         time_offered: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'menu',
//     }
// );

// module.exports = Menu;


const { Schema, model } = require('mongoose');

const menuSchema = new Schema(
  {
    name: {
        type: String,
        allowNull: false,
    },
    time_offered: {
        type: String,
        allowNull: false,
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Menu = model('menu', menuSchema);

module.exports = Menu;