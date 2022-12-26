require('dotenv').config();
const mysql = require('mysql2');

const { HOST, PORT, USER, PASSWORD, DATABASE } = process.env;

const connection = mysql.createConnection({
  host: HOST,
  port: PORT,
  user: 'root',
  password: 'RootPass',
  database: DATABASE,
  multipleStatements: true,
});
connection.connect(function (err) {
  if (err) throw err;
  console.log('database connection established');
});

module.exports = connection;
