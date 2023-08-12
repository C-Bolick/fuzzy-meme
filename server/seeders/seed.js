const db = require('../config/connection');
const {Menu, Entree} = require('../models');
const seedEntrees = require('./entreeData.json');
const seedMenu = require('./menuData.json');

db.once('open', async () => {
  try{
  await Menu.create(seedMenu);
  await Entree.create(seedEntrees);

  console.log('all done!');
  process.exit(0);
  } catch (err) {
    throw err;
  }
});