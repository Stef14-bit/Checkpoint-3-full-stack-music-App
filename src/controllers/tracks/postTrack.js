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
      res.status(200).json(createTrack);
    })
    .catch((err) => {
      console.err(err);
      res.status(500);
    });
};
