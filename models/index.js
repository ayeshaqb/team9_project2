'use strict';

const fs = require('fs');
const path = require('path');
// const connection = require('../config/connection.js');
// const sequelize = require('../config/connection')
const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Creating junction table and defining many to many associations
const User = sequelize.define('User', { name: DataTypes.STRING });
const Char = sequelize.define('Char', { name: DataTypes.STRING });
const CharUsers = sequelize.define('CharUsers', {
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  CharId: {
    type: DataTypes.INTEGER,
    references: {
      model: Char,
      key: 'id'
    }
  }
});
User.belongsToMany(Char, { through: CharUsers });
Char.belongsToMany(User, { through: CharUsers });


module.exports = db;
