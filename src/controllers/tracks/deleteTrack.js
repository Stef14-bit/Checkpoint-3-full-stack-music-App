const connection = require('../../../database');

module.exports = (req, res) => {
  connection
    .promise()
    .query('DELETE FROM track where id_track=?', [req.params.id])
    .then(([result]) => {
      if (result.affectedRows) {
        res.status(204).send('no content');
      } else {
        res.status(404);
      }
    });
};
