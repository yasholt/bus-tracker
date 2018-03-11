const express = require('express');
const app = express();
const adminRouter = require('./app/routers/adminRouter');
const driverRouter = require('./app/routers/driverRouter');
require('./app/services/checkConnection');

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// set Routers
app.use('/admin', adminRouter);
app.use('/driver', driverRouter);