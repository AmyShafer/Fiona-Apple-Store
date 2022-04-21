// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // Define the third table needed to store the foreign keys
  through: { 
    model: Tag,
    unique: false
  },
  as: 'tag_id'
});

// Categories have many Products
Category.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Tag,
    unique: false
  },
  as: 'category_is'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
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
