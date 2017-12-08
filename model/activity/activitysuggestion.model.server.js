var mongoose = require('mongoose');
var ActivitySuggestionSchema = require("./activitysuggestion.schema.server");
var ActivitySuggestionModel = mongoose.model("ActivitySuggestionModel", ActivitySuggestionSchema);

ActivitySuggestionModel.createActivity = createActivity;
ActivitySuggestionModel.findAllActivitiesForEvents = findAllActivitiesForEvents;
ActivitySuggestionModel.findActivityById = findActivityById;
ActivitySuggestionModel.updateActivity = updateActivity;
ActivitySuggestionModel.deleteActivity = deleteActivity;

module.exports = ActivitySuggestionModel;

function createActivity(eventId, activity) {
  var newEvent = null;
  return EventModel.create(event)
    .then(function (event) {
      newEvent = event;
      TravelerModel.findTravelerById(travelerId)
        .then(function (traveler) {
          event.travelers.push(traveler);
          event.save();
          traveler.events.push(newEvent);
          return traveler.save();
        });
    });
}

function findAllActivitiesForEvents(travelerId) {
  return EventModel.find({_id: travelerId});
}

function findActivityById(eventId) {
  return EventModel.findOne({_id: eventId});
}

function updateActivity(eventId, event) {
  return EventModel.update({_id: eventId}, event);
}

function deleteActivity(eventId) {
  return EventModel.deleteOne({_id: eventId});
}
