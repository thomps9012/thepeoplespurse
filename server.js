const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes");
const db = require('./models');
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// sets up connection to db
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'budgetvotes'
});

//connect to database
connection.connect();

app.use(routes)

db.sequelize.sync().then(function(){
  app.listen(3001, function(){
    console.log('app listening on port 3001!');
  });
});