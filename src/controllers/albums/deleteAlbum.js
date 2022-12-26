const connection = require('../../../database');

module.exports = (req, res) => {
  connection
    .promise()
    .query('DELETE FROM album WHERE id_album=?', [req.params.id])
    .then(([result]) => {
      res.status(204).send('No content');
    })
    .catch((err) => {
      console.error(err);
    });
};
