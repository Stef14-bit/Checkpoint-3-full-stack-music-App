const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  const { title, genre, picture, artist } = req.body;
  connection
    .promise()
    .query(
      'INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)',
      [title, genre, picture, artist]
    )
    .then(([result]) => {
      let item = req.body;
      item.id = result.insertId;

      res.status(201).send(item);
    })
    .catch((e) => console.error(e));
};
