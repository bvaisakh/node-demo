var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

var Contact = mongoose.model('Contact');


router.get('/', function (req, res) {
  Contact.find({}, function (err, contacts) {
    if (err) {
      next(err);
    }
    res.render('./view', {
      title: "Contacts",
      contacts: contacts
    });
  });
});

router.get('/:name/:number', function (req, res, next) {
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

module.exports = router;