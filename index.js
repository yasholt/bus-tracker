const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
const path = require('path');
const keys = require('./server/config/keys');

require('./server/services/checkConnection');
require('./server/services/passport');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 34 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// set Routers
require('./server/routers/adminRouter')(app);
require('./server/routers/driverRouter')(app);
require('./server/routers/authRouter')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
