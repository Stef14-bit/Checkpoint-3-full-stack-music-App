const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pavel1994',
  database: 'mydb',
});

module.exports = connection