const Sequelize = require('sequelize');
const keys = require('./keys');

module.exports = new Sequelize(keys.postgresURI, {
    dialect: 'postgres',
    logging: false,
    operatorsAliases: false
});
