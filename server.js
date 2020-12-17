const mysql = require('mysql');
const express = require('express');
const routes = require("./routes");
const db = require('./models');
var app = express();


var PORT = process.env.PORT || 3001;

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
  database: 'budgetvotes'
});

//connect to database
connection.connect();

console.log(connection);


// Requiring our routes
app.use(routes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

//test route for pulling data
app.get('/', function (req, res) {
  connection.query('SELECT * FROM votes', function(error, results, fields)
  {
    if (error) throw error;
    res.end(JSON.parse(results));
  });
});