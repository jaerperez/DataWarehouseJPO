const { Model, DataTypes } = require('sequelize');
const sequelize = require('../index');

class Region extends Model { }
Region.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Region'
});

module.exports = Region;
