const express = require('express');
const driverRouter = new express.Router();
const userController = require('../controllers/userController');
const responseErrorsHandler = require('../services/userResponceHandler');

driverRouter.delete('/delete-user/:id', async (req, res) => {
    const handlersResult = responseErrorsHandler('delete-user', await userController.deleteUser(req));
    res.status(handlersResult.status).send(handlersResult);
});

driverRouter.get('/get-user/:id', async (req, res) => {
    const handlersResult = responseErrorsHandler('get-user', await userController.getUser(req));
    res.status(handlersResult.status).send(handlersResult);
});

module.exports = driverRouter;