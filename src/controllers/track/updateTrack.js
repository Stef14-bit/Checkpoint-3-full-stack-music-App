const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  connection
    .promise()
    .query('UPDATE track SET ? WHERE id = ?', [req.body, req.params.id])
    .then(([result]) => {
      res.send(result);
    })
    .catch((e) => console.error(e));
};
