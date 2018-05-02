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
  database: "burgers_db"

});

connection.connect(function(err) {
  if (err) {
  	console.error("error connecting: " + err.stack);
  	return;
  }
  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;