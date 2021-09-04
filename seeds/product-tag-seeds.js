const { ProductTag } = require("../models");
const sequelize = require("../config/connection");
const productTagData = require("./productTagData.json");

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
