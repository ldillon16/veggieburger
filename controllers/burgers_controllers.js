var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObj = {
			burgers: data
		};
		console.log(hbsObj);
		res.render("index", hbsObj);
	});
});

// post = create new burger
// router.post("/api/burgers", function(req, res) {
// 	burger.insertOne([ "burger_name"
// 	], [
// 		req.body.burger_name
// 	], function(data) {
// 		res.redirect("/");

// 		///need help here
// 	});
// });

//put = update
router.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);
	console.log( "REQ: " + req.body.devoured);


	burger.updateOne({
		devoured: 1
	}, condition, function(result) {
		// if (res.changedRows == 0) {
		// 	res.status(404).end();
		// } else {
			res.redirect("/");
		// }
	})

})




module.exports = router;
