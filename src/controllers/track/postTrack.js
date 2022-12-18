const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  const { title, youtube_url, id_album } = req.body;
  connection
    .promise()
    .query(
      'INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)',
      [title, youtube_url, id_album]
    )
    .then(([result]) => {
      res.send(result);
    })
    .catch((e) => console.error(e));
};
