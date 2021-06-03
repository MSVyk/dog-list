const mysql = require('mysql')

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'dogsDB'
});

connection.connect();

module.exports = connection;