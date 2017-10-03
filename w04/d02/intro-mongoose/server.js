// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// app setup
const app = express();

// mongoose connection
mongoose.connection.openUri(process.env.DB_CONN);

var User = require('./models/user');

app.set('views', './views');
app.set('view engine', 'ejs');


// app routes

// app start
app.listen(3000, function(){
  console.log('Server running on port 3000')
});
