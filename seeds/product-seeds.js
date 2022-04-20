const { Product } = require('../models');

const productData = [
  {
    product_name: 'delicate man body wash',
    price: 12.99,
    stock: 12,
    category_id: 1,
  },
  {
    product_name: 'cleanse myself cleanser',
    price: 19.00,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'shameika\'s shampoo',
    price: 7.89,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'crash cymbals conditioner',
    price: 7.89,
    stock: 18,
    category_id: 1,
  },
  {
    product_name: 'a little hope hand soap',
    price: 2.99,
    stock: 9,
    category_id: 1,
  },
  {
    product_name: 'some old fires candle',
    price: 7.99,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: 'a scent in the breeze candle',
    price: 7.99,
    stock: 12,
    category_id: 2,
  },
  {
    product_name: 'humble dwelling pillow',
    price: 12.99,
    stock: 3,
    category_id: 2,
  },
  {
    product_name: 'heavy with mood weighted blanket',
    price: 17.99,
    stock: 22,
    category_id: 2,
  },
  {
    product_name: 'blooming within bed sheets',
    price: 45.00,
    stock: 30,
    category_id: 2,
  },
  {
    product_name: 'haunt the world notebook',
    price: 4.00,
    stock: 47,
    category_id: 3,
  },
  {
    product_name: 'evil, babe sheet music notebook',
    price: 6.00,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'clear view thank you cards',
    price: 12.00,
    stock: 39,
    category_id: 3,
  },
  {
    product_name: 'backstage door tee',
    price: 10.00,
    stock: 13,
    category_id: 4,
  },
  {
    product_name: 'boundless as the dark briefs',
    price: 5.00,
    stock: 30,
    category_id: 4,
  },
  {
    product_name: 'over coals socks',
    price: 3.99,
    stock: 22,
    category_id: 4,
  },
  {
    product_name: 'folderol sun hat',
    price: 12.00,
    stock: 3,
    category_id: 4,
  },
  {
    product_name: 'Craig Williams Portrait',
    price: 50.00,
    stock: 1,
    category_id: 5,
  },
  {
    product_name: 'Marvin Mayfield Portrait',
    price: 50.00,
    stock: 1,
    category_id: 5,
  },
  {
    product_name: 'Tamika Graham Portrait',
    price: 50.00,
    stock: 13,
    category_id: 5,
  },
  {
    product_name: 'Alex Lora Portrait',
    price: 50.00,
    stock: 1,
    category_id: 5,
  },
  {
    product_name: 'Gleena Portrait',
    price: 50.00,
    stock: 1,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
