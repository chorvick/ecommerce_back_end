// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Product = require('./Product');
// Initialize Product Tags  model (table) by extending off Sequelize's Model class
class ProductTag extends Model { }

ProductTag.init(
  {
    // define columns set up fields and rules for Product Tags model

    id: {
      type: DataTypes.INTEGER,
      allownull: false,
      primarykey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Product",
        key: "id",

      },

    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
      },

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
