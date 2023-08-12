const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class Points extends Model { }
    Points.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            user: {
                
            }
        }
    )