const User = require('./User');
const Char = require('./Char');

User.hasMany(Char, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Char.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Char };
