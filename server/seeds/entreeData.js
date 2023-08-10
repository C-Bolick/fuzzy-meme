const { Entree } = require('../models');

const entreedata = [
  {
    id: 1,
    name: 'Bacon/Eggs',
    price: 7.00,
    menu_id: 1,
    filename: '#',
    description: 'Two eggs of your preferred style, a choice of bacon or sausage, as well as a choice of four pancakes or waffles.',
  },
  {
    id: 2,
    name: 'Country Fried Breakfast',
    price: 9.00,
    menu_id: 1,
    filename: '#',
    description: 'A country fried steak with two eggs of your preferred style with either diced potatoes or hash browns.',
  },
  {
    id: 3,
    name: 'Philly Cheesesteak Omelet',
    price: 8.00,
    menu_id: 1,
    filename: '#',
    description: 'A Philly cheesesteak omelet with your choice of cheese and peppers, served with toast or a biscuit.',
  },
  {
    id: 4,
    name: 'Krabby Patty',
    price: 9.00,
    menu_id: 2,
    filename: '#',
    description: 'Just a well made burger with cheese, 100% USDA approved beef, pickles, tomatoes, lettuce and a side of fries.',
  },
  {
    id: 5,
    name: 'Wings',
    price: 12.00,
    menu_id: 2,
    filename: '#',
    description: 'Wings',
  },
  {
    id: 6,
    name: 'BLT Macaroni Salad',
    price: 8.00,
    menu_id: 2,
    filename: '#',
    description: "It's a macaroni salad, it's a BLT, it's a combination BLT macaroni salad!",
  },
  {
    id: 7,
    name: 'The Steak and Potatoes',
    price: 23.00,
    menu_id: 3,
    filename: '#',
    description: "A beef steak served with a loaded baked potato and your choice of side salad or soup.",
  },
  {
    id: 8,
    name: 'Krusty Krab Pizza',
    price: 18.00,
    menu_id: 3,
    filename: '#',
    description: "A 16 inch New York style pepperoni pizza for everyone to enjoy!",
  },
  {
    id: 9,
    name: "Lasagna",
    price: 14.00,
    menu_id: 3,
    filename: '#',
    description: "Served with a side salad.",
  },
  {
    id: 10,
    name: 'Water',
    price: 0,
    menu_id: 4,
    filename: 'water.jpg',
  },
  {
    id: 11,
    name: 'Coca-Cola',
    price: 2.00,
    menu_id: 4,
    filename:'coca-cola.jpg',
  },
  {
    id: 12,
    name: 'Sprite',
    price: 2.00,
    menu_id: 4,
    filename: 'sprite.jpg',
  },
  {
    id: 13,
    name: 'Kelp Shake',
    price: 4.00,
    menu_id: 4,
    filename: '#',
  },
  {
    id: 14,
    name: 'Sweet Tea',
    price: 3.00,
    menu_id: 4,
    filename: '#',
  },
  {
    id: 15,
    name: 'Tater-tots',
    price: 2.50,
    menu_id: 5,
    filename: '#',
    description: 'tots', 
  },
  {
    id: 16,
    name: 'Onion Rings',
    price: 3.00,
    menu_id: 5,
    filename: '#',
    description: 'funyuns',
  }

];

const seedEntrees = () => Entree.bulkCreate(entreedata);

module.exports = seedEntrees;