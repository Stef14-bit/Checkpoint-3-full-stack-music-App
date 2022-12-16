require('dotenv').config();
const express = require('express');
const connection = require('./db')

const app = express();
app.use(express.json())


app.use('/api/tracks/:id', async (req,res) => {
  const {id} = req.params
  connection.query(
    'SELECT * FROM track WHERE id = ?', [id],
    (err,results) => {
      if (err) console.log(err)
      return res.json(...results)
    }
  )
})
app.use('/api/tracks', async (req, res) => {
  connection.query(
    'SELECT * FROM track', (err,results) => {
      if (err) console.log(err);
      return res.json(results)
    }
  )
})



app.use('/api', async (req, res) => {
  res.send('Hello world')
})




// Please keep this module.exports app, we need it for the tests !
module.exports = app;
