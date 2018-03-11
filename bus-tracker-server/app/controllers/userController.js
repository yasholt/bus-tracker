const UserModel = require('../models/relations').User;

exports.getAllUsers = async () => {
    try {
        return await UserModel.getAllUsers();
    } catch (error) {
        return error;
    }
};

exports.createUser = async (req) => {
    const user = {
        userID: 20,
        userFirstName: 'ololsha',
        userSecondName: 'second name',
        userEmail: '1mail122@mail.com',
        userType: false
    };
    return await UserModel.createUser(user);

};

exports.deleteUser = async (req) => {
    /*const userID = req.body.email;*/
    const userID = 20;
    return await UserModel.deleteUser(userID);
};

