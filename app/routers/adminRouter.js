const userController = require('../controllers/userController');
const trackController = require('../controllers/trackController');
const responseHandler = require('../services/responseHandler');
const { requireAdmin, requireLogIn } = require('../middleware/requireAuth');

module.exports = (app) => {
    app.get(
        '/admin/get-all-users',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseHandler(
                'get-all',
                await userController.getAllUsers()
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.post(
        '/admin/add-user',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseHandler(
                'add',
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
            const handlersResult = responseHandler(
                'delete',
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
            const handlersResult = responseHandler(
                'get',
                await userController.getUser(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.put(
        '/admin/update-user/:id',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseHandler(
                'update',
                await userController.updateUser(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.post(
        '/admin/add-track',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseHandler(
                'add',
                await trackController.createTrack(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.get(
        '/admin/get-all-tracks',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseHandler(
                'get-all',
                await trackController.getAllTracks()
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.get(
        '/admin/get-track/:id',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseHandler(
                'get',
                await trackController.getTrack(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.put(
        '/admin/update-track/:id',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseHandler(
                'update',
                await trackController.updateTrack(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.delete(
        '/admin/delete-track/:id',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseHandler(
                'delete',
                await trackController.deleteTrack(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );
};
