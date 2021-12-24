const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');

class ContactChannel extends Model { }
ContactChannel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING
}, {
    sequelize,
    modelName: 'ContactChannel'
})

module.exports = ContactChannel;