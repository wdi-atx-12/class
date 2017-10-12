const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const expressSession = require('express-session');
const passport = require('passport');
require('dotenv').config();

// mongoose connect
mongoose.connection.openUri(process.env.DB_CONN, function(err, conn) {
  if (err) {
    console.log('Error connecting to Mongo DB', err);
  } else {
    console.log('Successfully connected mongoose to Mongo DB');
  }
});

// app setup
const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(expressSession({secret: 'mySecretKey'}));

app.use('/', express.static(__dirname + '/public'));

// auth config
app.use(passport.initialize());
app.use(passport.session());
// TODO: setup Facebook strategy for passport

// app routes
app.get('/', function(req, res) {
  res.send('Howdy'); // TODO: render page
});

// TODO: add /auth/facebook route
// TODO: add /auth/facebook/callback route
// TODO: add /logout route

// start server
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
