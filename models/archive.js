//file to go into model folder
const { Model, DataTypes } = require('sequelize');
const sequilize = require('/config/connection');

class Archive extends Model {}

//model for archive dataTypes
//todo: write attributes
Archive.init(
{
    char_id:{
        type: DataTypes.integer,
        allowNull: false,
        primaryKey: true,
        autoIcrement: true
    },
    char_Name:{
        type: DataType.string,
        allowNull: false,
    },
    char_hugs:{
        type: DataType.integer,
        allowNull: false,
    },
    char_rarity:{
    type: DataTypes.string,
    allowNull: false,
    }
}
{
    sequilize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName:'archive'
}
);

module.exports = Archive;