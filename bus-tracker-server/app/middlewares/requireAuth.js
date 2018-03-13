module.exports = {
    requireAdmin: (req, res, next) => {
        if (!req.user.userType)
            return res.status(401).send({ error: 'You must be an admin' });
        next();
    },
    requireLogIn: (req, res, next) => {
        if (!req.user)
            return res.status(401).send({ error: 'You must log in' });
        next();
    }
};
