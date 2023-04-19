const mysql = require('mysql2');

const connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password: 'Hu3nt!ngton',
  database: 'employees',
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection; 