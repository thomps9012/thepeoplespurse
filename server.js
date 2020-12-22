const mysql = require('mysql');
const express = require('express');
const routes = require("./routes");
const db = require('./models');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 3001;

// Creating express app and configuring middleware needed for authentication

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// sets up connection to db
var connection = mysql.createConnection({
  host: '3001',
  user: 'root',
  password: 'root',
  database: 'budgetvotes'
});

//connect to database
connection.connect();

console.log(connection);


// Requiring our API routes
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


//running our other requests through the react app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
}); 
//test route for pulling data
app.get('/', function (req, res) {
  connection.query('SELECT * FROM votes', function(error, results, fields)
  {
    if (error) throw error;
    res.end(JSON.parse(results));
  });
});