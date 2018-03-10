const Sequelize = require('sequelize');
const keys = require('../../config/keys');
const sequelize = new Sequelize(keys.postgresURI);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });