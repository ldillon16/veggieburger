var orm = require("../config/orm.js");

//code that will call the orm functions using burger specific input for the orm


// burger object to be exported
var burger = {

	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	};

	insertOne: function(cols, vals, cb) {
		orm.insertOne("burgers", cols, vals, function(res) {
			cb(res);
		});
	};

	updateOne: function(d, e,f) {
		orm.updateOne("burgers", objColVals, condition, function(res) {
			cb(res);
		});
	}
};

// export burger object
module.exports = burger;