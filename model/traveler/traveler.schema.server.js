var EventSchema = require("../event/event.schema.server");
var mongoose = require('mongoose');

var TravelerSchema = mongoose.Schema ( {
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  dob: Date,
  phone: String,
  dateCreated: Date,
  fbLogin: String,
  gLogin: String,
  events: [EventSchema]
}, {collection: 'traveler'});

module.exports = TravelerSchema;
