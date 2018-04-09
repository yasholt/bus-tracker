const Sequelize = require('sequelize');
const sequelize = require('../../../config/db');

const describePointTable = {
    trackID: {
        type: Sequelize.INTEGER,
        field: 'track_id'
    },
    pointType: {
        type: Sequelize.BOOLEAN,
        field: 'point_type'
    },
    pointLongitude: {
        type: Sequelize.INTEGER,
        field: 'point_longitude'
    },
    pointLatitude: {
        type: Sequelize.INTEGER,
        field: 'point_latitude'
    }
};

const optionPointTable = {
    freezeTableName: true,
    timestamps: false,
};

let Point = sequelize.define('points', describePointTable, optionPointTable);

module.exports = Point;