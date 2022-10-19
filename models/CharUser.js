//file to go into model folder
const { Model, DataTypes } = require('sequelize');
const sequilize = require('/config/connection');

class CharUser extends Model {}

//model for archive dataTypes
//todo: write attributes

CharUser.init(
{
    charTag_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.INTEGER(11),
        primaryKey: true
    },
    character_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'chars',
          key: 'id',
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
         references: {
            model: 'user',
            key: 'id',
        },
    },
    mood: {
        type: DataTypes.INTEGER,
        defaultValue: 50,
    }
},
{
    sequilize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName:'archive'
}
);

module.exports = CharUser;