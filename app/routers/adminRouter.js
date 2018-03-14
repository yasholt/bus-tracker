const userController = require('../controllers/userController');
const responseErrorsHandler = require('../services/userResponceHandler');
const { requireAdmin, requireLogIn } = require('../middlewares/requireAuth');

module.exports = (app) => {
    app.get(
        '/admin/get-all-users',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const result = await userController.getAllUsers();
            res.status(200).send(result);
        }
    );

    app.post(
        '/admin/add-user',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseErrorsHandler(
                'add-user',
                await userController.createUser(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.delete(
        '/admin/delete-user/:id',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseErrorsHandler(
                'delete-user',
                await userController.deleteUser(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.get(
        '/admin/get-user/:id',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseErrorsHandler(
                'get-user',
                await userController.getUser(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );
};
