const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');

class ContactInfo extends Model { }
ContactInfo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idUser: DataTypes.INTEGER,
    idChannel: DataTypes.INTEGER,
    account: DataTypes.STRING,
    prefference: DataTypes.STRING
}, {
    sequelize,
    modelName: 'ContactInfo'
})

module.exports = ContactInfo;