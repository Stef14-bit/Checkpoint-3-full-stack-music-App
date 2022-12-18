const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  connection
    .promise()
    .query('SELECT * FROM track WHERE id = ?', [id])
    .then(([result]) => {
      if (result.length) {
        return res.json(...result);
      }
      return res.sendStatus(404);
    })
    .catch((e) => console.error(e));
};
