const express = require('express');
const adminRouter = new express.Router();
const userController = require('../controllers/userController');
const responseErrorsHandler = require('../services/userResponceHandler');

adminRouter.get('/get-all-users', async (req, res) => {
    const result = await userController.getAllUsers();
    res.status(200).send(result);
});

adminRouter.post('/add-user', async (req, res) => {
    const handlersResult = responseErrorsHandler('add-user', await userController.createUser(req));
    res.status(handlersResult.status).send(handlersResult);
});

adminRouter.delete('/delete-user/:id', async (req, res) => {
    const handlersResult = responseErrorsHandler('delete-user', await userController.deleteUser(req));
    res.status(handlersResult.status).send(handlersResult);
});

adminRouter.get('/get-user/:id', async (req, res) => {
    const handlersResult = responseErrorsHandler('get-user', await userController.getUser(req));
    res.status(handlersResult.status).send(handlersResult);
});

module.exports = adminRouter;