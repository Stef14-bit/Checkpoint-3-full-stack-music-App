const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  connection
    .promise()
    .query('SELECT * FROM track WHERE id = ?', [id])
    .then(([result]) => {
      res.send(result);
    })
    .catch((e) => console.error(e));
};
