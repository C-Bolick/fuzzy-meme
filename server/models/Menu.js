const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Entree = require('./Entree');

class Menu extends Model { }

Menu.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time_offered: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'menu',
    }
);

Menu.hasMany(Entree, { foreignKey: 'menu_id' });

module.exports = Menu;