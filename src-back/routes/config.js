const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // address of the server
  user: 'root', // username
  password: 'password',
  database: 'wildCircus',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('My Sql is connected');
});

module.exports = connection;
