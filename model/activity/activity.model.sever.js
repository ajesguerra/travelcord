var mongoose = require('mongoose');
var ActivitySchema = require("./activity.schema.server");
var ActivityModel = mongoose.model("ActivityModel", ActivitySchema);

ActivityModel.createActivity = createActivity;
ActivityModel.findAllActivitiesForEvents = findAllActivitiesForEvents;
ActivityModel.findActivityById = findActivityById;
ActivityModel.updateActivity = updateActivity;
ActivityModel.deleteActivity = deleteActivity;

module.exports = ActivityModel;

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
