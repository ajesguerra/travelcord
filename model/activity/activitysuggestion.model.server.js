var mongoose = require('mongoose');
var ActivitySuggestionSchema = require("./activitysuggestion.schema.server");
var ActivitySuggestionModel = mongoose.model("ActivitySuggestionModel", ActivitySuggestionSchema);

ActivitySuggestionModel.createSuggestion = createSuggestion;
ActivitySuggestionModel.findSuggestionById = findSuggestionById;
ActivitySuggestionModel.updateSuggestion = updateSuggestion;
ActivitySuggestionModel.deleteSuggestion = deleteSuggestion;

module.exports = ActivitySuggestionModel;

function createSuggestion(suggestion) {
  return ActivitySuggestionModel.create(suggestion);
}

function findSuggestionById(suggestionId) {
  return ActivitySuggestionModel.findOne({_id: suggestionId})
    .populate('travelerUpVoters')
    .exec();
}

function updateSuggestion(suggestionId, suggestion) {
  return ActivitySuggestionModel.update({_id: suggestionId}, suggestion);
}

function deleteSuggestion(suggestionId) {
  return ActivitySuggestionModel.deleteOne({_id: suggestionId});
}
