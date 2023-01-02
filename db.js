require('dotenv').config();
const mysql = require('mysql2');

const { db_host, db_port, db_user, db_pass } = process.env;

const connection = mysql.createConnection({
  host: db_host,
  port: db_port,
  user: db_user,
  password: db_pass,
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) console.error(err);
  console.log('Connected to database');
});

module.exports = connection;
