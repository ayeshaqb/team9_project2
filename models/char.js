const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Char extends Model {}

Char.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mood: {
        type: DataTypes.INTEGER,
        defaultValue: 50,
    },
    rarity: {
        type: DataTypes.STRING,
    },
    date_collected: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'chars',
  }
);

module.exports = Char;
