const albumsRouter = require('express').Router();
const connection = require('../db');

albumsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM album WHERE id = ?', [id], (err) => {
    if (err) console.log(err);
    res.status(204).send();
  });
});

albumsRouter.put('/:id', async (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  connection.query(
    'UPDATE album SET title = ? WHERE id = ?',
    [title, id],
    (err) => {
      if (err) return console.log(err);
      res.status(204).send();
    }
  );
});

albumsRouter.post('', async (req, res) => {
  const { title, genre, picture, artist } = req.body;
  connection.query(
    'INSERT INTO album (title,genre,picture,artist) VALUES (?,?,?,?)',
    [title, genre, picture, artist],
    (err, results) => {
      if (err) return console.log(err);
      return connection.query(
        'SELECT * FROM album WHERE id = ' + results.insertId,
        (err, result) => {
          if (err) return console.log(err);
          res.status(201).json(...result);
        }
      );
    }
  );
});

albumsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM album WHERE id = ?', [id], (err, results) => {
    if (err) return console.log(err);
    if (results.length > 0) {
      res.status(200).json(...results);
    }
    res.status(404).send();
  });
});

albumsRouter.get('/:id/tracks', async (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM track WHERE id = ?', [id], (err, results) => {
    if (err) return console.log(err);
    res.status(200).json(results);
  });
});

albumsRouter.get('', async (req, res) => {
  connection.query('SELECT * FROM album', (err, results) => {
    if (err) return console.log(err);
    res.status(200).json(results);
  });
});

module.exports = albumsRouter;
