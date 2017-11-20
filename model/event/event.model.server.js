var mongoose = require('mongoose');
var EventSchema = require("./event.schema.server");
var EventModel = mongoose.model("EventModel", EventSchema);
var TravelerModel = require('../traveler/traveler.model.server');

EventModel.createEvent = createEvent;
EventModel.findAllEventsForTraveler = findAllEventsForTraveler;
EventModel.findEventById = findEventById;
EventModel.updateEvent = updateEvent;
EventModel.deleteEvent = deleteEvent;

module.exports = EventModel;

function createEvent(travelerId, event) {
  console.log('getting to the model');
  var newEvent = null;
  return EventModel.create(event)
    .then(function (event) {
      console.log('model made the event and the traveler id is ' + travelerId);
      console.log(event);
      newEvent = event;
      // newEvent.travelers.push(travelerId);
      TravelerModel.findTravelerById(travelerId)
        .then(function (traveler) {
          console.log(traveler);
          console.log('made it back from the traveler model');
          traveler.events.push(newEvent);
          console.log(traveler);
          return traveler.save();
        })
    });
}

function findAllEventsForTraveler(travelerId) {
  return EventModel.find({_id: travelerId});
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
