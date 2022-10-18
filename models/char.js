'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Char extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Char.init({
    charName: DataTypes.STRING,
    rarity: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Char',
  });
  return Char;
};