const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');

class City extends Model{}
City.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    country: DataTypes.INTEGER
},{
    sequelize,
    modelName: 'City'
})

module.exports=City;