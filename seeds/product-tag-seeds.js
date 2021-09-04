const { ProductTag } = require("../models");
const sequelize = require("../config/connection");
const productTagData = require("./productTagData.json");
sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);
const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
