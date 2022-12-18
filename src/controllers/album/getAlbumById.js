const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  connection
    .promise()
    .query('SELECT * FROM album WHERE id = ?', [id])
    .then(([result]) => {
      if (!result.length) {
        res.status(404);
      }
      res.send(...result);
    })
    .catch((e) => console.error(e));
};
