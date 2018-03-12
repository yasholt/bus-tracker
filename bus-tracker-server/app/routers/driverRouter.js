const userController = require('../controllers/userController');
const responseErrorsHandler = require('../services/userResponceHandler');

module.exports = (app) => {
    app.delete('/driver/delete-user/:id', async (req, res) => {
        const handlersResult = responseErrorsHandler(
            'delete-user',
            await userController.deleteUser(req)
        );
        res.status(handlersResult.status).send(handlersResult);
    });

    app.get('/driver/get-user/:id', async (req, res) => {
        const handlersResult = responseErrorsHandler(
            'get-user',
            await userController.getUser(req)
        );
        res.status(handlersResult.status).send(handlersResult);
    });
};
