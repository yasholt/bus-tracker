const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const describeTrackTable = {
    userID: {
        type: Sequelize.INTEGER,
        field: 'user_id'
    },
    trackName: {
        type: Sequelize.STRING,
        field: 'track_name'
    }
};

const optionTrackTable = {
    freezeTableName: true
};

let Track = sequelize.define('tracks', describeTrackTable, optionTrackTable);

module.exports = Track;
