const sequelize = require('../config/connection');
const seedMeal = require('./entreeData');
const seedMenu = require('./menuData.js');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMenu();

  await seedMeal();

  process.exit(0);
};

seedAll();