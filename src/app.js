const express = require('express');
const { trackRoute, albumRoute } = require('./routes');

const app = express();
app.use(express.json());

app.use('/track', trackRoute);
app.use('/album', albumRoute);

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
