var mongoose = require('mongoose');

var EventSchema = mongoose.Schema ( {
  eventName: String,
  isPublic: Boolean,
  description: String,
  dateCreated: Date,
  travelers: [{type:mongoose.Schema.Types.ObjectId, ref: 'TravelerModel'}]
}, {collection: 'event'});

module.exports = EventSchema;
