const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

require('./app/services/checkConnection');
require('./app/services/passport');

// set Routers
require('./app/routers/adminRouter')(app);
require('./app/routers/driverRouter')(app);
require('./app/routers/authRouter')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

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
