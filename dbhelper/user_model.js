var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Affiliation = require('./affiliation_model');

var UserSchema = new mongoose.Schema({
    username: { type: String, default: "User name"},
    email: { type: String, default: "User email"},
    password: { type: String, default: "User password"},
  });
mongoose.model('User',UserSchema);
module.exports = { 
  model : mongoose.model('user', UserSchema),
  object: mongoose.model('user')
}