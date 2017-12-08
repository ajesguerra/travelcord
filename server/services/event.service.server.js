module.exports = function (app) {

  var eventModel = require("../../model/event/event.model.server");
  var travelerModel = require("../../model/traveler/traveler.model.server");

  app.post("/api/event/:travelerId/newevent", createEvent);
  app.get("/api/event/:eventId", findEventById);
  app.put("/api/traveler/:eventId", updateEvent);
  app.delete("/api/traveler/:eventId", deleteEvent);

  function createEvent(req, res) {
    var travelerId = req.body.owner;
    var event = req.body;
    var newEvent = null;
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
    travelerModel.findAllEventsForTraveler(travelerId)
      .then(function (events) {
        res.json(events);
      });
  }

  function findEventById(req, res) {
    eventModel.findEventById(req.params['eventId'])
      .then(function (event) {
        res.json(event);
      });
  }

  function updateEvent(req, res) {
    eventModel.updateWebsite(req.params['websiteId'], req.body)
      .then(function (websites) {
        res.json(websites);
      });
  }

  function deleteEvent(req, res) {
    eventModel.deleteWebsite(req.params['websiteId'])
      .then(function (websites) {
        res.json(websites);
      });
  }
};
