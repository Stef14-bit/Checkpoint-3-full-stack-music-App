const tracksRouter = require('express').Router();
const connection = require('../db');

tracksRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM track WHERE id = ?', [id], (err) => {
    if (err) console.log(err);
    res.status(204).send();
  });
});

tracksRouter.put('/:id', async (req, res) => {
  const { title } = req.body;
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

tracksRouter.post('', async (req, res) => {
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

tracksRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM track WHERE id = ?', [id], (err, results) => {
    if (err) return console.log(err);
    if (results.length > 0) {
      return res.json(...results);
    }
    return res.status(404).send();
  });
});

tracksRouter.get('', async (req, res) => {
  connection.query('SELECT * FROM track', (err, results) => {
    if (err) return console.log(err);
    return res.json(results);
  });
});

module.exports = tracksRouter;
