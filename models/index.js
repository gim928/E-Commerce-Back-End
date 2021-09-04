// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");
const { belongsTo } = require("./Product");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category-id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category-id",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
