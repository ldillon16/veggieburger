var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

// serve static content for the app from the "public" directory
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

// parse application/JSON
app.use(bodyParser.JSON());


// setting handlebars
var exphbs = require('express-handlebars');

// engine set & view
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = ("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
	console.log("App now listening at localhost:" + PORT);
});