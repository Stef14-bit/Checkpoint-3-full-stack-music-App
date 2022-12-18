const connection = require('../../../db.js');

module.exports = async (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  connection
    .promise()
    .query('UPDATE track SET title = ? WHERE id = ?', [title, id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((e) => console.error(e));
};
