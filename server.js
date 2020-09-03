const mysql = require('mysql');
const express = require('express');
const routes = require("./routes");
const db = require('./models');
var app = express();


// Setting up port and requiring models for syncing
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// sets up connection to db
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'thepeoplespurse'
});

//connect to database
connection.connect();

app.use(routes)

db.sequelize.sync().then(function() {
  app.listen(process.env.PORT || 3001)
  });