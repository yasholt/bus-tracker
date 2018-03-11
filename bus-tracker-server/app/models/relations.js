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
        const data = await  Models.User.build(user).save();
        console.log('Created new user successful:', data);
        return data;
    } catch (error) {
        console.error('Create new user error:', error);
        return error;
    }
};


Models.User.getAllUsers = async () => {
    try {
        const data = await  Models.User.findAll();
        console.log('Got all users successful:', data);
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
            console.log('User deleted successful:');
        } else {
            console.error('User delete error:');
        }
        return data;
    } catch (error) {
        console.error('User delete error:', error);
        return error;
    }
};


module.exports = Models;