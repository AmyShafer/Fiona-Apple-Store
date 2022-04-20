// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  // Define the third table needed to store the foreign keys
  through: { 
    model: Tags,
    unique: false
  },
  as: 'tag_id'
});

// Categories have many Products
Category.belongsToMany(Products, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Tags,
    unique: false
  },
  as: 'category_name'
});

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
