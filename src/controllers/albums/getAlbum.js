const connection = require('../../../database');

module.exports = (req, res) => {
  connection
    .promise()
    .query('SELECT * FROM album WHERE id_album = ?', [req.params.id])
    .then(([result]) => {
      if (!result.length) {
        res.status(404).send('No album found');
      } else {
        res.json(result[0]);
      }
    });
};
