const userController = require('../controllers/userController');
const trackController = require('../controllers/trackController');
const responseHandler = require('../services/responseHandler');
const { requireLogIn, checkIdRequirement } = require('../middleware/requireAuth');

module.exports = (app) => {
    app.delete(
        '/api/driver/delete-user/:id',
        requireLogIn,
        checkIdRequirement,
        async (req, res) => {
            const handlersResult = responseHandler(
                'delete-user',
                await userController.deleteUser(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        });

    app.get(
        '/api/driver/get-user/:id',
        requireLogIn,
        checkIdRequirement,
        async (req, res) => {
            const handlersResult = responseHandler(
                'get-user',
                await userController.getUser(req)
            );
        res.status(handlersResult.status).send(handlersResult);
    });

    app.put(
        '/api/driver/update-user/:id',
        requireLogIn,
        checkIdRequirement,
        async (req, res) => {
            const handlersResult = responseHandler(
                'update-user',
                await userController.updateUser(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.get(
        '/api/driver/get-user-tracks/:id',
        requireLogIn,
        checkIdRequirement,
        async (req, res) => {
            const handlersResult = responseHandler(
                'get-all',
                await trackController.getUserTracks(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.post(
        '/api/driver/add-track',
        requireLogIn,
        async (req, res) => {
            const handlersResult = responseHandler(
                'add',
                await trackController.createTrack(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.get(
        '/api/driver/get-track/:id',
        requireLogIn,
        async (req, res) => {
            const handlersResult = responseHandler(
                'get',
                await trackController.getTrack(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.put(
        '/api/driver/update-track/:id',
        requireLogIn,
        async (req, res) => {
            const handlersResult = responseHandler(
                'update',
                await trackController.updateTrack(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    );

    app.delete(
        '/api/driver/delete-track/:id',
        requireLogIn,
        async (req, res) => {
            const handlersResult = responseHandler(
                'delete',
                await trackController.deleteTrack(req)
            );
            res.status(handlersResult.status).send(handlersResult);
        }
    )
};
