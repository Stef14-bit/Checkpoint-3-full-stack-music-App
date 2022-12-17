require('dotenv').config();
const express = require('express');
const connection = require('./db');
const albumsRouter = require('../src/routers/albums');
const tracksRouter = require('../src/routers/tracks');
const app = express();
app.use(express.json());

app.use('/api/albums', albumsRouter);
app.use('/api/tracks', tracksRouter);

app.use('/api', async (req, res) => {
  res.send('Hello world');
});

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
