const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  connection
    .promise()
    .query('UPDATE track SET ? WHERE id = ?', [req.body, req.params.id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((e) => console.error(e));
};
