const sequelize = require('../config/connection');
const seedEntree = require('./entreeData');
const seedMenu = require('./menuData.js');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMenu();

  await seedEntree();

  process.exit(0);
};

seedAll();