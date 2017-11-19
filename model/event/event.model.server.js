var mongoose = require('mongoose');
var EventSchema = require("./event.schema.server");
var EventModel = mongoose.model("EventModel", EventSchema);
var TravelerModel = require('../traveler/traveler.model.server');

EventModel.createEvent = createEvent;
EventModel.findEventById = findEventById;
EventModel.updateEvent = updateEvent;
EventModel.deleteEvent = deleteEvent;

module.exports = EventModel;

function createEvent(travelerId, event) {
  var newEvent = null;
  return EventModel.create(event)
    .then(function (event) {
      newEvent = event;
      newEvent.travelers.push(travelerId);
      TravelerModel.findTravelerById(travelerId)
        .then(function (traveler) {
          traveler.events.push(newEvent);
          return traveler.save();
        })
    });
}

function findEventById(eventId) {
  return EventModel.findOne({_id: eventId});
}

function updateEvent(eventId, event) {
  return EventModel.update({_id: eventId}, event);
}

function deleteEvent(eventId) {
  return EventModel.deleteOne({_id: eventId});
}
