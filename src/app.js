require('dotenv').config();
const express = require('express');
const connection = require('../db');

connection
  .promise()
  .query('use music')
  .catch((err) => {
    console.error(err);
  });

const app = express();

app.get('/api/tracks', (req, res) => {
  connection
    .promise()
    .query('SELECT * FROM track')
    .then(([response]) => {
      if (response.length) {
        res.send(response);
      }
    });
});

app.get('/api/tracks/:id', (req, res) => {
  res.json([{ hello: 'hello world' }]);
});

app.get('/', (req, res) => {
  res.json([{ hello: 'hello world' }]);
});

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
