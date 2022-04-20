const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Self Care',
  },
  {
    category_name: 'Home Goods',
  },
  {
    category_name: 'Stationary',
  },
  {
    category_name: 'Basic Necessities',
  },
  {
    category_name: 'Art',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
