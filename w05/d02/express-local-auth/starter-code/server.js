// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// app setup
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// TODO: make sure you create a `.env` file with your DB credentials
mongoose.connection.openUri(process.env.DB_CONN, function(err, conn) {
  if (err) {
    console.log('Error connecting to Mongo DB', err);
  } else {
    console.log('Successfully connected mongoose to Mongo DB');
  }
});

app.use('/', express.static('public'))

// app routes
const accountRoutes = require('./routes/account');

app.get('/signup', accountRoutes.getSignupPage);
app.get('/login', accountRoutes.getLoginPage);

// start server
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
