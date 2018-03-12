const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./app/services/checkConnection');

// set Routers
require('./app/routers/adminRouter')(app);
require('./app/routers/driverRouter')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
