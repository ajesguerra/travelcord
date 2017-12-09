var mongoose = require('mongoose');

var TravelerSchema = mongoose.Schema ( {
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  phone: String,
  dateCreated: Date,
  following: [String],
  events: [{type:mongoose.Schema.Types.ObjectId, ref: 'EventModel'}],
  suggestionUpVotes: [String]
}, {collection: 'traveler'});

module.exports = TravelerSchema;
