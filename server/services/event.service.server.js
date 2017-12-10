module.exports = function (app) {

  var eventModel = require("../../model/event/event.model.server");
  var travelerModel = require("../../model/traveler/traveler.model.server");

  app.get("/api/event/findAllEvents", findAllEvents);
  app.post("/api/event/:travelerId/newevent", createEvent);
  app.get("/api/event/:eventId", findEventById);
  app.get("/api/traveler/:travelerId/event", findAllEventsForTraveler);
  app.put("/api/event/:eventId", updateEvent);
  app.post("/api/event/addTraveler/:eventId/:travelerId", addTravelerToEvent);
  app.delete("/api/event/:eventId", deleteEvent);

  function createEvent(req, res) {
    var travelerId = req.body.owner;
    var event = req.body;
    console.log(event);
    eventModel.createEvent(travelerId, event)
      .then(function (event) {
        eventModel.findAllEventsForTraveler(travelerId)
          .then(function (events) {
            res.json(events);
          });
      });
  }

  function findAllEventsForTraveler(req, res) {
    const travelerId = req.params['travelerId'];
    // Finds the traveler, then sends back just the events array/field.
    travelerModel.findTravelerById(travelerId)
      .then(function (traveler) {
        if (traveler) {
          res.json(traveler.events);
        } else {
          res.json({});
        }
      });
  }

  function findEventById(req, res) {
    eventModel.findEventById(req.params['eventId'])
      .then(function (event) {
        res.json(event);
      });
  }

  function updateEvent(req, res) {
    eventModel.updateEvent(req.params['eventId'], req.body)
      .then(function (event) {
        res.json(event);
      });
  }

  function deleteEvent(req, res) {
    eventModel.deleteEvent(req.params['eventId'])
      .then(function (event) {
        res.json(event);
      });
  }

  function addTravelerToEvent(req, res) {
    eventModel.findEventById(req.params['eventId'])
      .then(function (event) {
        travelerModel.findTravelerById(req.params['travelerId'])
          .then(function (traveler) {
            event.travelers.push(traveler);
            event.save();
            traveler.events.push(event);
            traveler.save();
            res.json(event);
          });
      })
  }

  function findAllEvents(req, res) {
    eventModel.findAllEvents()
      .then(function (events) {
        res.json(events);
      });
  }
};
