'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Brand, {
        as : 'brand',
        foreignKey : 'brandId'
      });

      Product.belongsTo(models.Section, {
        as : 'section',
        foreignKey : 'sectionId'
      });

      Product.belongsTo(models.Category, {
        as : 'category',
        foreignKey : 'sectionId'
      });

      Product.hasMany(models.Cart, {
        as: 'cart',
        foreignKey: 'productId'
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    size: DataTypes.STRING,
    mainImage: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    sectionId: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};