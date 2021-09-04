const { Category } = require("../models");
const categoryData = require("./categoryData.json");

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
