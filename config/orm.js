// require/import connection
var connection = require("./connection.js")

var orm = {

selectAll: function(a, b, c) {
	var queryString = "SELECT * FROM ?";
	connection.query(queryString, [a, b, c], function(err, result) {
		if (err) throw err;
		console.log(result);
	});
};

insertOne: function(a, b, c) {
	var queryString = "INSERT INTO veggie_burgers (burger_name, devoured) VALUES ("
}

updateOne: function()







}

module.exports = orm;