const connection = require('../../../database');

module.exports = (req, res) => {
  const { title, genre, picture, artist } = req.body;
  connection
    .promise()
    .query('INSERT INTO album (title,genre,picture,artist) VALUES (?,?,?,?)', [
      title,
      genre,
      picture,
      artist,
    ])
    .then(([result]) => {
      const createAlbum = {
        id: result.insertId,
        title,
        genre,
        picture,
        artist,
      };
      res.status(201).send('created').json(createAlbum);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};
