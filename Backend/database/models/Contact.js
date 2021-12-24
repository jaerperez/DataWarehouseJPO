const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');

class Contact extends Model { }
Contact.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    company: DataTypes.INTEGER,
    region: DataTypes.INTEGER,
    country: DataTypes.INTEGER,
    city: DataTypes.INTEGER,
    interest: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Contact'
})

module.exports=Contact;