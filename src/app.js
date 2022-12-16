require('dotenv').config();
const express = require('express');
const connection = require('./db')

const app = express();
app.use('/api/tracks', async (req, res) => {
  connection.query(
    'SELECT * FROM track', (err,results) => {
      if (err) console.log(err);
      res.send(results)
    }
  )
})


app.use('/api', async (req, res) => {
  res.send('Hello world')
})




// Please keep this module.exports app, we need it for the tests !
module.exports = app;
