const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  if (req.params.id) next();
  connection
    .promise()
    .query('SELECT * FROM album')
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((e) => console.error(e));
};
