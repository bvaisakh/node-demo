var express = require('express');
var mongoose = require('mongoose');

// Connecting to mongodb
mongoose.connect('mongodb://localhost/kmug');

var Contact = require('./model');
var controller = require('./controller');

var app = express();

// Setting render engine
app.set('views', './');
app.set('view engine', 'ejs');

app.use(controller);

// Error handling
app.use(function (err, req, res, next) {
  res.writeHead(500, {
    'Content-Type': 'text/html'
  });
  res.end("Internal Server Error: " + err.stack);
});

// Bounding with a port
app.listen(3000, function () {
  console.log('Server app listening on port 3000!');
});