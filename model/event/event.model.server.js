var mongoose = require('mongoose');
var EventSchema = require("./event.schema.server");
var EventModel = mongoose.model("EventModel", EventSchema);
var ActivitiesModel = require('../activity/activity.model.sever');
var ActivitiesSuggestionModel = require('../activity/activitysuggestion.model.server');
var TravelerModel = require('../traveler/traveler.model.server');

EventModel.createEvent = createEvent;
EventModel.findAllEvents = findAllEvents;
EventModel.findAllEventsForTraveler = findAllEventsForTraveler;
EventModel.findEventById = findEventById;
EventModel.updateEvent = updateEvent;
EventModel.deleteEvent = deleteEvent;

module.exports = EventModel;

function createEvent(travelerId, event) {
  var newEvent = null;
  event.dateCreated = new Date(Date.now());
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

function findAllEvents() {
  return EventModel.find();
}

function findAllEventsForTraveler(travelerId) {
  return EventModel.find({_id: travelerId});
}

// https://stackoverflow.com/questions/28179720/mongoose-populate-nested-array
function findEventById(eventId) {
  return EventModel.findOne({_id: eventId})
    .populate('travelers')
    .populate('owner')
    .populate({
      path: 'activities',
      model: ActivitiesModel,
      populate: {
        path: 'decidedActivity',
        model: ActivitiesSuggestionModel
      }
    })
    .exec();
}

function updateEvent(eventId, event) {
  return EventModel.update({_id: eventId}, event);
}

function deleteEvent(eventId) {
  return EventModel.deleteOne({_id: eventId});
}
