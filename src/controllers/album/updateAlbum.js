const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  const { title } = req.body;
  const { id } = req.params;
  connection
    .promise()
    .query('UPDATE album SET title = ? WHERE id = ?', [title, id])
    .then(([result]) => {
      res.sendStatus(204);
    })
    .catch((e) => console.error(e));
};
