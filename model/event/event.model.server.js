var mongoose = require('mongoose');
var EventSchema = require("./event.schema.server");
var EventModel = mongoose.model("EventModel", EventSchema);
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

function findEventById(eventId) {
  return EventModel.findOne({_id: eventId})
    .populate('travelers')
    .populate('owner')
    .populate('activities')
    .exec();
}

function updateEvent(eventId, event) {
  return EventModel.update({_id: eventId}, event);
}

function deleteEvent(eventId) {
  return EventModel.deleteOne({_id: eventId});
}
