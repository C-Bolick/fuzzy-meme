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