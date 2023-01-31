require('dotenv').config();
const mysql = require('mysql2');

const { db_host, db_port, db_user, db_pass, db_name } = process.env;

const connection = mysql.createConnection({
  host: db_host,
  port: db_port,
  user: db_user,
  password: db_pass,
  database: db_name,
  multipleStatements: true,
});
connection.connect(function (err) {
  if (err) throw err;
  console.log('database connection established');
});

module.exports = connection;
