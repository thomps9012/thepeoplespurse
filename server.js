const mysql = require('mysql');
const express = require('express');
let cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { response, query } = require('express');
const router = express.Router();
const routes = require("./routes");
const db = require('./models');
var app = express();
var sequelize = require('sequelize');
const votes = require('./models/votes');
var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('client/build'));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})


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