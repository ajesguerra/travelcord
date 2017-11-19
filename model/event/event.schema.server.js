var TravelerSchema = require("../traveler/traveler.schema.server");
var mongoose = require('mongoose');

var EventSchema = mongoose.Schema ( {
  eventName: String,
  isPublic: boolean,
  description: String,
  dateCreated: Date,
  travelers[TravelerSchema]
}, {collection: 'event'});

module.exports = EventSchema;
