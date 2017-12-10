var mongoose = require('mongoose');
var ActivitySuggestionSchema = require("./activitysuggestion.schema.server");
var ActivitySuggestionModel = mongoose.model("ActivitySuggestionModel", ActivitySuggestionSchema);

ActivitySuggestionModel.createSuggestion = createSuggestion;
ActivitySuggestionModel.findSuggestionById = findSuggestionById;

module.exports = ActivitySuggestionModel;

function createSuggestion(suggestion) {
  return ActivitySuggestionModel.create(suggestion);
}

function findSuggestionById(suggestionId) {
  return ActivitySuggestionModel.findOne({_id: suggestionId})
    .populate('travelerUpVoters')
    .exec();
}
