var mongoose = require('mongoose');

var ActivitySuggestionSchema = mongoose.Schema ( {
  activitySuggestionName: String,
  suggestionLocation: String,
  travelerUpVoters: [String]
}, {collection: 'activitysuggestion'});

module.exports = ActivitySuggestionSchema;
