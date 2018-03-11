const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://nrgppocc:SKLKY-v9qWeQl5kBTHDaqQZ-DMF35YUf@horton.elephantsql.com:5432/nrgppocc')

const describeUserTable = {
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
    }
};

const optionUserTable = {
    freezeTableName: true,
    indexes: [
        {
            unique: true,
            fields: ['user_email']
        }
    ]
};

let User = sequelize.define('users', describeUserTable, optionUserTable);

module.exports = User;
