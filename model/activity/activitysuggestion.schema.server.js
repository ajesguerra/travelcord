var mongoose = require('mongoose');

var ActivitySuggestionSchema = mongoose.Schema ( {
  activitySuggestionName: String,
  suggestionLocation: String,
  travelerUpVoters: [{type:mongoose.Schema.Types.ObjectId, ref: 'TravelerModel'}],
  travelerDownVoters: [{type:mongoose.Schema.Types.ObjectId, ref: 'TravelerModel'}]
}, {collection: 'activitysuggestion'});

module.exports = ActivitySuggestionSchema;
