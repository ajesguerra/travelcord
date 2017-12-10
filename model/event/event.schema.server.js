var mongoose = require('mongoose');

var EventSchema = mongoose.Schema ( {
  eventName: String,
  description: String,
  dateCreated: Date,
  owner: {type:mongoose.Schema.Types.ObjectId, ref: 'TravelerModel'},
  travelers: [{type:mongoose.Schema.Types.ObjectId, ref: 'TravelerModel'}],
  activities: [{type:mongoose.Schema.Types.ObjectId, ref: 'ActivityModel'}]
}, {collection: 'event'});

module.exports = EventSchema;
