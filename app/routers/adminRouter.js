const userController = require('../controllers/userController');
const trackController = require('../controllers/trackController');
const userResponseHandler = require('../services/userResponseHandler');
const { requireAdmin, requireLogIn } = require('../middleware/requireAuth');

module.exports = (app) => {
    app.get(
        '/admin/get-all-users',
        requireLogIn,
        requireAdmin,
        async (req, res) => {
            const handlersResult = userResponseHandler(
                'get-all-users',
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
            const handlersResult = userResponseHandler(
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
            const handlersResult = userResponseHandler(
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
            const handlersResult = userResponseHandler(
                'get-user',
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
            const handlersResult = userResponseHandler(
                'update-user',
                await userController.updateUser(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.post(
        '/admin/add-track',
        /*requireLogIn,
        requireAdmin,*/
        async (req, res) => {
            const handlersResult = await trackController.createTrack(req);

            res.send(handlersResult);
        }
    );

    app.get(
        '/admin/get-all-tracks',
        /*requireLogIn,
        requireAdmin,*/
        async (req, res) => {
            const handlersResult = await trackController.getAllTracks();

            res.send(handlersResult);
        }
    );

    app.get(
        '/admin/get-track/:id',
        /*requireLogIn,
        requireAdmin,*/
        async (req, res) => {
            const handlersResult = await trackController.getTrack(req);

            res.send(handlersResult);
        }
    );

    app.put(
        '/admin/update-track/:id',
        /*requireLogIn,
        requireAdmin,*/
        async (req, res) => {
            const handlersResult = await trackController.updateTrack(req);

            res.send(handlersResult);
        }
    );

    app.delete(
        '/admin/delete-track/:id',
        /*requireLogIn,
        requireAdmin,*/
        async (req, res) => {
            const handlersResult = await trackController.deleteTrack(req);

            res.send(handlersResult);
        }
    );
};
