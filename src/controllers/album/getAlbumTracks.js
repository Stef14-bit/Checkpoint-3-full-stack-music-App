const connection = require('../../../db.js');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  connection
    .promise()
    .query(
      'SELECT album.*, track.title AS track FROM album JOIN track ON album.id = track.id_album WHERE album.id = ?',
      [id]
    )
    .then(([result]) => {
      res.send(result);
    })
    .catch((e) => console.error(e));
};
