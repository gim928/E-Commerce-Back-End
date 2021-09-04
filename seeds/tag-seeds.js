const { Tag } = require("../models");

const tagData = require("./tagData.json");

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
