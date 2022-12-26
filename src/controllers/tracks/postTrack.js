const connection = require('../../../database');

module.exports = (req, res) => {
  const { title, youtube_url, id_album } = req.body;
  connection
    .promise()
    .query('INSERT INTO track (title,youtube_url,id_album) values (?,?,?)', [
      title,
      youtube_url,
      id_album,
    ])
    .then(([result]) => {
      const createTrack = { id: result.insertId, title, youtube_url, id_album };
      res.status(201).send('created').json(createTrack);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};
