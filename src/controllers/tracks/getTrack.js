const connection = require('../../../database');

module.exports = (req, res) => {
  let { id } = req.params;
  connection
    .promise()
    .query('SELECT * FROM track WHERE id_track = ?', [id])
    .then(([result]) => {
      if (!result.length) {
        res.status(404).send({
          status: '404',
          msg: 'Not found',
          data: null,
        });
      } else {
        res.json(result);
      }
    });
};
