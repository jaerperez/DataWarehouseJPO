const City = require('./City');
const Company = require('./Company');
const Contact = require('./Contact');
const ContactChannel = require('./ContactChannel');
const ContactInfo = require('./ContactInfo');
const Country = require('./Country');
const Region = require('./Region');
const User = require('./User');


Region.hasMany(Country, {
    as: 'countryRegion',
    foreignKey: 'region',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Country.belongsTo(Region, {
    as: 'countryRegion',
    foreignKey: 'region',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Country.hasMany(City, {
    as: 'cityCountry',
    foreignKey: 'country',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

City.belongsTo(Country, {
    as: 'cityCountry',
    foreignKey: 'country',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Contact.hasMany(ContactInfo, {
    foreignKey: 'idUser',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

ContactInfo.belongsTo(Contact, {
    foreignKey: 'idUser',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

ContactChannel.hasMany(ContactInfo, {
    foreignKey: 'idChannel',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

ContactInfo.belongsTo(ContactChannel, {
    foreignKey: 'idChannel',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Region.hasMany(Contact, {
    foreignKey: 'region',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Contact.belongsTo(Region, {
    foreignKey: 'region',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Country.hasMany(Contact, {
    as: 'contactCountry',
    foreignKey: 'country',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Contact.belongsTo(Country, {
    as: 'contactCountry',
    foreignKey: 'country',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

City.hasMany(Contact, {
    as: 'contactCity',
    foreignKey: 'city',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Contact.belongsTo(City, {
    as: 'contactCity',
    foreignKey: 'city',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Company.hasMany(Contact, {
    as: 'contactCompany',
    foreignKey: 'company',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Contact.belongsTo(Company, {
    as: 'contactCompany',
    foreignKey: 'company',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});


Region.hasMany(Company, {
    foreignKey: 'region',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Company.belongsTo(Region, {
    foreignKey: 'region',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Country.hasMany(Company, {
    foreignKey: 'country',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Company.belongsTo(Country, {
    foreignKey: 'country',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

City.hasMany(Company, {
    foreignKey: 'city',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Company.belongsTo(City, {
    foreignKey: 'city',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});


module.exports = { 
    User, 
    Region, 
    Country, 
    City, 
    ContactChannel, 
    Contact, 
    ContactInfo, 
    Company };