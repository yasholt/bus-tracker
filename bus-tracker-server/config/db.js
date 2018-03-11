const Sequelize = require('sequelize');
const prodKeys = require('./prod');
const devKeys = require('./dev');

if (process.env.NODE_ENV === 'production') {
    module.exports = new Sequelize(prodKeys.postgresURI);
} else {
    module.exports = new Sequelize(devKeys.postgresURI);
}