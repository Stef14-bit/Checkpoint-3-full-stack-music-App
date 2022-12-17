require('dotenv').config();
const express = require('express');
const connection = require('./db');

const app = express();
app.use(express.json());


app.get('/api/albums/:id', async (req,res) => {
  const {id} = req.params
  connection.query(
    'SELECT * FROM album WHERE id = ?',
    [id],
    (err,results) => {
      if (err) return console.log(err)
      res.status(200).json(...results)
    }
  )
})

app.get('/api/albums/:id/tracks', async(req,res) => {
  const {id} = req.params;
  connection.query(
    'SELECT * FROM track WHERE id = ?',
    [id],
    (err,results) => {
      if (err) return console.log(err)
      res.status(200).json(results)
    }
  )
})

app.get('/api/albums', async (req,res) => {
  connection.query(
    'SELECT * FROM album',
    (err, results) => {
      if (err) return console.log(err)
      res.status(200).json(results)
    }
  )
})

app.delete('/api/tracks/:id', async(req,res) => {
  const {id} = req.params;
  connection.query(
    'DELETE FROM track WHERE id = ?',
    [id],
    (err) => {
      if (err) console.log(err)
      res.status(204).send()
    }
  )
})

app.put('/api/tracks/:id', async (req, res) => {
  const { title} = req.body;
  const { id } = req.params;
  connection.query(
    'UPDATE track SET title = ? WHERE id = ?',
    [title, id],
    (err) => {
      if (err) return console.log(err);
      res.status(204).send();
    }
  );
});

app.post('/api/tracks', async (req, res) => {
  const { title, youtube_url, id_album } = req.body;
  connection.query(
    'INSERT INTO track (title,youtube_url,id_album) VALUES (?,?,?)',
    [title, youtube_url, id_album],
    (err, results) => {
      if (err) return console.log(err);
      return connection.query(
        'SELECT * FROM track WHERE id = ' + results.insertId,
        (err, result) => {
          if (err) return console.log(err);
          res.status(201).json(...result);
        }
      );
    }
  );
});

app.get('/api/tracks/:id', async (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM track WHERE id = ?', [id], (err, results) => {
    if (err) return console.log(err);
    if (results.length>0) {
      return res.json(...results);
    }
    return res.status(404).send()
  });
});

app.get('/api/tracks', async (req, res) => {
  connection.query('SELECT * FROM track', (err, results) => {
    if (err) return console.log(err);
    return res.json(results);
  });
});

app.use('/api', async (req, res) => {
  res.send('Hello world');
});

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
