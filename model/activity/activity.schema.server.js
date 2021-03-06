var mongoose = require('mongoose');

var ActivitySchema = mongoose.Schema ( {
  activityName: String,
  description: String,
  startDate: Date,
  endDate: Date,
  isDecided: Boolean,
  decidedActivity: {type:mongoose.Schema.Types.ObjectId, ref: 'ActivitySuggestionModel'},
  dateCreated: Date,
  activitySuggestions: [{type:mongoose.Schema.Types.ObjectId, ref: 'ActivitySuggestionModel'}],
  promotions: [{type:mongoose.Schema.Types.ObjectId, ref: 'PromotionModel'}]
}, {collection: 'activity'});

module.exports = ActivitySchema;
