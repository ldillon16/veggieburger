-- var mysql = require("mysql");

-- var connection = mysql.createConnection({
--   host: "localhost",
--   port: 3306,
--   socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",

--   // username
--   user: "root",

--   // password
--   password: "root",
--   database: "bamazon"

-- });

-- connection.connect(function(err) {
--   if (err) throw err;
--   connection.query("SELECT * FROM customers", function (err, result, fields) {
--     if (err) throw err;
--     console.log(result);
--   });
-- });

-- create database & use database (burgers_db)
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the burgers table within the burgers_db

CREATE TABLE veggie_burgers 
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
)