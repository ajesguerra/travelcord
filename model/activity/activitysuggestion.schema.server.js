var mongoose = require('mongoose');

var ActivitySuggestionSchema = mongoose.Schema ( {
  activitySuggestionName: String,
  suggestionLocation: String,
  travelerUpVoters: [{type:mongoose.Schema.Types.ObjectId, ref: 'TravelerModel'}],
  comments: [String]
}, {collection: 'activitysuggestion'});

module.exports = ActivitySuggestionSchema;
