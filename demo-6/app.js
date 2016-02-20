var express = require('express');
var mongoose = require('mongoose');

// Connecting to mongodb
mongoose.connect('mongodb://localhost/kmug');

// Defining a model
var Schema = mongoose.Schema;
var contactSchema = new Schema({
  name: String,
  number: Number
});
var Contact = mongoose.model('Contact', contactSchema);

var app = express();

// Routing
app.get('/', function (req, res) {
  Contact.find({}, function (err, contacts) {
    if (err) {
      next(err);
    }
    res.send(contacts);
  });
});

app.get('/:name/:number', function (req, res, next) {
  var contact = new Contact({
    name: req.params.name,
    number: req.params.number
  });
  contact.save(function (err) {
    if (err) {
      next(err);
      return;
    }
    res.send("Contact saved!");
  });
});

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