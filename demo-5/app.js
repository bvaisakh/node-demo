var express = require('express');
var morgan = require('morgan');
var app = express();

// Middlewares
app.use(morgan('combined'));

app.use(function (req, res, next) {
  console.log(req.url);
  next();
});

// Routing
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/about', function (req, res, next) {
  res.send('This is simple express application');
});

// Bounding with a port
app.listen(3000, function () {
  console.log('Server app listening on port 3000!');
});