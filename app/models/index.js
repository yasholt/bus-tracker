// getModels
const User = require('./User');
const Track = require('./Track');
const Point = require('./Point');

// setRelations
Track.belongsTo(User, {foreignKey: 'userID'});
User.hasMany(Track, {foreignKey: 'userID'});

Point.belongsTo(Track, {foreignKey: 'trackID'});
Track.hasMany(Point, {foreignKey: 'trackID'});

// sync models with DB
// noinspection JSIgnoredPromiseFromCall
syncModels();

// setMethods
require('./User/methods')(User);
require('./Track/methods')(Track, Point);

const Models = {
    User,
    Track,
    Point
};

async function syncModels () {
    try {
        await User.sync(/*{force:true}*/);

        try {
            await Track.sync(/*{force:true}*/);

            try {
                await Point.sync(/*{force:true}*/);

                console.log('DB models synced successfully');

            } catch (error) { console.log('Error to sync Point model', error) }
        } catch (error) { console.log('Error to sync Track model', error) }
    } catch (error) { console.log('Error to sync User model', error) }
}

module.exports = Models;