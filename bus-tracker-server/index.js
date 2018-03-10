const express = require('express');
const app = express();
require('./app/services/checkConnection');

const PORT = process.env.PORT || 5000;
app.listen(PORT);
