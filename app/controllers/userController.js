const UserModel = require('../models').User;

exports.getAllUsers = async () => {
    return await UserModel.getAllUsers();
};

exports.createUser = async (req) => {
    return await UserModel.createUser(req.body);
};

exports.deleteUser = async (req) => {
    return await UserModel.deleteUser(req.params.id);
};

exports.getUser = async (req) => {
    return await UserModel.getUserByID(req.params.id);
};

exports.updateUser = async (req) => {
    return await UserModel.updateUser(req.params.id, req.body);
};