const Models = {};
const sequalize = require('../../config/db');

//getModels
Models.User = require('./User');

//create models in DB
Models.User.sync(/*{force:true}*/);

//setMethods

// --- User Model ---

Models.User.createUser = async (user) => {
    try {
        const data = await Models.User.build(user).save();
        console.log('Created new user successful');
        return data;
    } catch (error) {
        console.error('Create new user error:', error);
        return error;
    }
};


Models.User.getAllUsers = async () => {
    try {
        const data = await  Models.User.findAll();
        console.log('Got all users successful');
        return data;
    } catch (error) {
        console.error('Get all users error:', error);
        return error;
    }
};

Models.User.deleteUser = async (userID) => {
    try {
        const data = await Models.User
            .destroy({
                where: {
                    id: userID
                }
            });
        if (data === 1) {
            console.log('User deleted successful');
            return data;
        } else {
            throw new Error('No user with such userID');
        }
    } catch (error) {
        console.error('User delete error:', error);
        return error;
    }
};

Models.User.getUserByID = async (userID) => {
    try {
        const data = await Models.User
            .findOne({
                where: {
                    id: userID
                }
            });
        if (data) {
            return data;
        } else {
            throw new Error('No user with such userID');
        }
    } catch (error) {
        console.error('User get error:', error);
        return error;
    }
};

Models.User.getUserByGoogleID = async (userGoogleID) => {
    try {
        const data = await Models.User.findOne({
            where: {
                userGoogleID: userGoogleID.toString()
            }
        });
        console.log('Successful get user by google id');
        return data
    } catch (error) {
        console.error('Error to get user by googleID:', error);
        return error;
    }
};

module.exports = Models;