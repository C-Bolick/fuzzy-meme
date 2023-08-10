const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Entree extends Model { }

Entree.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        menu_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'menu',
                key: 'id',
            }
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'entree',
    }
);
module.exports = entree;