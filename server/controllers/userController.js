const UserModel = require('../models').User;

exports.getAllUsers = async (req) => {
    return await UserModel.getAllUsers(req.query.page, req.query.size);
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