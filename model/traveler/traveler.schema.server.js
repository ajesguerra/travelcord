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
  events: [{type:mongoose.Schema.Types.ObjectId, ref: 'EventModel'}]
}, {collection: 'traveler'});

module.exports = TravelerSchema;
