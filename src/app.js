require('dotenv').config();
const express = require('express');
const connection = require('../database');
const { tracksRoute, albumsRoute } = require('./routes');

connection
  .promise()
  .query('USE music')
  .catch((err) => console.error(err));

const app = express();
app.use(express.json());

app.use('/api/tracks', tracksRoute);
app.use('/api/albums', albumsRoute);

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
