// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// class Entree extends Model { }

// Entree.init(
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
//         menu_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'menu',
//                 key: 'id',
//             }
//         },
//         filename: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         description: {
//             type: DataTypes.STRING,
//         },
//         price: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'entree',
//     }
// );
// module.exports = Entree;



const { Schema, model } = require('mongoose');

const entreeSchema = new Schema(
  {
    name: {
      type: String,
      allowNull: false,
    },
    menu_id: {
      type: Number,
      references: {
        model: 'menu',
        key: 'id',
      }
    },
    filename: {
      type: String,
      allowNull: false,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      allowNull: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const Entree = model('entree', entreeSchema);

module.exports = Entree;