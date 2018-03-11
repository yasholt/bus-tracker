const sequelize = require('../../config/db');

(async () => {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            require('../../app/models/relations');

        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })();