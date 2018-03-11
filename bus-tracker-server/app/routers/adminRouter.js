const express = require('express');
const adminRouter = new express.Router();
const userController = require('../controllers/userController');

adminRouter.get('/get-all-users', async (req, res) => {
    res.send(await userController.getAllUsers());
});

adminRouter.post('/add-user', async (req, res) => {
    const result = await userController.createUser(req);
    switch (result.errors[0].type) {
        case 'unique violation': {
            res.status(400).send({ message: result.errors[0].message}); break;
        }
    }
});

adminRouter.delete('/delete-user', async (req, res) => {
    if (await userController.deleteUser(req) === 0) {
        res.status(400).send({message: 'Error to delete user. There is no user with that ID.'})
    } else {
        res.send({message: 'User deleted successful'});
    }
});

module.exports = adminRouter;