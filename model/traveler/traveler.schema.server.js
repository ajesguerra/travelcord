var mongoose = require('mongoose');

var TravelerSchema = mongoose.Schema ( {
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  phone: String,
  dateCreated: Date,
  following: [String],
  role: {
    type: String,
    default: 'TRAVELER',
    enum: ['TRAVELER', 'MARKETER', 'ADMIN']},
  events: [{type:mongoose.Schema.Types.ObjectId, ref: 'EventModel'}],
  promotionDeploys: {
    type: Number,
    default: 0
  },
  suggestionUpVotes: [String]
}, {collection: 'traveler'});

module.exports = TravelerSchema;
