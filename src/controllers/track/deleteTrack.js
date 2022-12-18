const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  connection
    .promise()
    .query('DELETE FROM track WHERE id = ?', [req.params.id])
    .then(([result]) => {
      res.send(result);
    })
    .catch((e) => console.error(e));
};
