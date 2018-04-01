const userController = require('../controllers/userController');
const userResponseHandler = require('../services/userResponseHandler');
const { requireLogIn, checkIdRequirement } = require('../middleware/requireAuth');

module.exports = (app) => {
    app.delete('/driver/delete-user/:id', requireLogIn, checkIdRequirement, async (req, res) => {
        const handlersResult = userResponseHandler(
            'delete-user',
            await userController.deleteUser(req)
        );
        res.status(handlersResult.status).send(handlersResult);
    });

    app.get('/driver/get-user/:id', requireLogIn, async (req, res) => {
        const handlersResult = userResponseHandler(
            'get-user',
            await userController.getUser(req)
        );
        res.status(handlersResult.status).send(handlersResult);
    });
};
