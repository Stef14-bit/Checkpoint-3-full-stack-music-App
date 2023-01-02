const fs = require('fs');
const conection = require('./db');

const migrate = async () => {
  const sql = fs.readFileSync('./music.sql', 'utf8');
  await conection.promise().query(sql);
  conection.end();
};

try {
  migrate();
  console.log('successfully migrated');
} catch (err) {
  console.log(err);
}
module.exports = migrate;
