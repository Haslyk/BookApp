const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bookapp'
});

connection.connect(function(err) {
  if(err)
  {
    console.log("Not Connected : "+ err.stack)
    return;
  }
  console.log("Connect successfully")
})

module.exports = connection