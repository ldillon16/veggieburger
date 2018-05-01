// require mysql as dependency
var mysql = require("mysql");

// connect to mysql through mamp
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",

  // username
  user: "root",

  // password
  password: "root",
  database: "bamazon"

});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected..");
});

module.exports = connection;