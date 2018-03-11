const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRouter = require('./app/routers/adminRouter');
const driverRouter = require('./app/routers/driverRouter');
require('./app/services/checkConnection');

const PORT = process.env.PORT || 5000;
app.listen(PORT);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// set Routers
app.use('/admin', adminRouter);
app.use('/driver', driverRouter);

