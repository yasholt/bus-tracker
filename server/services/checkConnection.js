const sequelize = require('../../config/db');

(async () => {
        try {
            await sequelize.authenticate();
            console.log('Connection to DB has been established successfully');
            require('../models');

        } catch (error) {
            console.error('Unable to connect to the database', error);
        }
    })();