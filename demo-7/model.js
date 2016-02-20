var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var contactSchema = new Schema({
  name: String,
  number: Number
});
var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;