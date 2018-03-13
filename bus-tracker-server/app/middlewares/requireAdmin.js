module.exports = (req, res, next) => {
    if (req.user.userType)
        return res.status(401).send({ error: 'You must be an admin' });
    next();
};
