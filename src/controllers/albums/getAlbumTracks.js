const connection = require('../../../database');

module.exports = (req, res) => {
  connection
    .promise()
    .query('SELECT * FROM track WHERE id_album = ?', [req.params.id])
    .then(([result]) => {
      if (!result.length) {
        res.status(404).send('no content');
      } else {
        res.json(result);
      }
    });
};
