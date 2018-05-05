var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var methodOverride = require("method-override");
var path = require("path");

var PORT = process.env.PORT || 8080;

// serve static content for the app from the "public" directory
// app.use("/styles",express.static(path.join(__dirname, "/public")));
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/JSON
app.use(bodyParser.json());

app.use(methodOverride("_method"));

// setting handlebars
var exphbs = require('express-handlebars');

// engine set & view
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(PORT, function() {
	console.log("App now listening at localhost:" + PORT);
});

//middleware error?