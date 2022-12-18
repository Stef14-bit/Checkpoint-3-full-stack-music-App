const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  connection
    .promise()
    .query('SELECT * FROM track')
    .then(([result]) => {
      res.send(result);
    })
    .catch((e) => console.error(e));
  next();
};
