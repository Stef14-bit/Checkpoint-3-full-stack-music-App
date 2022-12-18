const express = require('express');
const { trackRoute, albumRoute } = require('./routes');
const connection = require('../db');

connection
  .promise()
  .query('use wild_music;')
  .catch((e) => console.error(e));

const app = express();
app.use(express.json());

app.use('/track', trackRoute);
app.use('/album', albumRoute);

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
