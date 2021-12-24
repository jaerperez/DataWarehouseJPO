const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');


class Country extends Model {}
Country.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    region: DataTypes.INTEGER
},{
    sequelize,
    modelName: 'Country'
});

module.exports=Country;