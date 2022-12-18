const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  connection
    .promise()
    .query('DELETE FROM album WHERE id = ?', [req.params.id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((e) => console.error(e));
};
