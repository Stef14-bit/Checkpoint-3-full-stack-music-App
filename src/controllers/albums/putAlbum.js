const connection = require('../../../database');

module.exports = (req, res) => {
  connection
    .promise()
    .query('UPDATE album SET ? WHERE id_album = ?', [req.body, req.params.id])
    .then(([result]) => {
      res.status(204).send('no content');
    })
    .catch((err) => {
      console.error(err);
    });
};
