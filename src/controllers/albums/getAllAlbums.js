const connection = require('../../../database');

module.exports = (req, res) => {
  connection
    .promise()
    .query('SELECT * FROM album')
    .then(([result]) => {
      res.send(result);
    });
};
