const userController = require('../controllers/userController');
const trackController = require('../controllers/trackController');
const responseHandler = require('../services/responseHandler');
const { requireAdmin, requireLogIn } = require('../middleware/requireAuth');

module.exports = (app) => {
    app.get(
        '/api/admin/get-all-users',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseHandler(
                'get-all',
                await userController.getAllUsers(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.post(
        '/api/admin/add-user',
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
        '/api/admin/delete-user/:id',
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
        '/api/admin/get-user/:id',
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
        '/api/admin/update-user/:id',
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
        '/api/admin/add-track',
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
        '/api/admin/get-all-tracks',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = responseHandler(
                'get-all',
                await trackController.getAllTracks(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.get(
        '/api/admin/get-track/:id',
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
        '/api/admin/update-track/:id',
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
        '/api/admin/delete-track/:id',
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
