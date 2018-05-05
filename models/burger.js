var orm = require("../config/orm.js");

//code that will call the orm functions using burger specific input for the orm


// burger object to be exported
var burger = {

	selectAll: function(cb) {
		orm.selectAll("veggie_burgers", function(res) {
			cb(res);
		})
	},

	insertOne: function(cols, vals, cb) {
		orm.insertOne("veggie_burgers", cols, vals, function(res) {
			cb(res);
		})
	},

	updateOne: function(objColVals, condition, cb) {
		orm.updateOne("veggie_burgers", objColVals, condition, function(res) {
			cb(res);
		})
	}

};

// export burger object
module.exports = burger;