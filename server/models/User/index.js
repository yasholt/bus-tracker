const Sequelize = require('sequelize');
const sequelize = require('../../config/db');

const describeUserTable = {
    userGoogleID: {
        type: Sequelize.STRING,
        field: 'user_google_id',
        unique: true
    },
    userFirstName: {
        type: Sequelize.STRING,
        field: 'user_first_name'
    },
    userSecondName: {
        type: Sequelize.STRING,
        field: 'user_second_name'
    },
    userEmail: {
        type: Sequelize.STRING,
        field: 'user_email',
        unique: true
    },
    userType: {
        type: Sequelize.BOOLEAN,
        field: 'user_type'
    },
    userImageURL: {
        type: Sequelize.STRING,
        field: 'user_image_url'
    }
};

const optionUserTable = {
    freezeTableName: true,
    indexes: [
        {
            unique: true,
            fields: ['user_email', 'user_google_id']
        }
    ]
};

let User = sequelize.define('users', describeUserTable, optionUserTable);

module.exports = User;
