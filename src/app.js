require('dotenv').config();
const express = require('express');
const connection = require('./db')

const app = express();
app.use(express.json())


app.post('/api/tracks', async (req,res) => {
  const {title,youtube_url,id_album} = req.body
  connection.query(
    'INSERT INTO track (title,youtube_url,id_album) VALUES (?,?,?)', [title,youtube_url,id_album],
    (err,_) => {
      if (err) return console.log(err)
      return connection.query('')
    }
    )
})

app.get('/api/tracks/:id', async (req,res) => {
  const {id} = req.params
  connection.query(
    'SELECT * FROM track WHERE id = ?', [id],
    (err,results) => {
      if (err) return console.log(err)
      return res.json(...results)
    }
  )
})
app.get('/api/tracks', async (req, res) => {
  connection.query(
    'SELECT * FROM track', (err,results) => {
      if (err) return console.log(err);
      return res.json(results)
    }
  )
})



app.use('/api', async (req, res) => {
  res.send('Hello world')
})




// Please keep this module.exports app, we need it for the tests !
module.exports = app;
