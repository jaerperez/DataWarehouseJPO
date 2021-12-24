const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');

class Company extends Model { }
Company.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    region: DataTypes.INTEGER,
    country: DataTypes.INTEGER,
    city: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Company'
})

module.exports = Company;