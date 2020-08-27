const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const routes = require("./routes");
const db = require('./models');
var app = express();
var sequelize = require('sequelize');
var PORT = process.env.PORT || 3001;
const publicPath = path.join(__dirname, '..', 'public');


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
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});