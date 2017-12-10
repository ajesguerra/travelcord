module.exports = function (app) {

  var eventModel = require("../../model/event/event.model.server");
  var travelerModel = require("../../model/traveler/traveler.model.server");

  app.post("/api/event/:travelerId/newevent", createEvent);
  app.post("/api/event/addTraveler/:eventId/:travelerId", addTravelerToEvent);
  app.get("/api/event/findAllEvents", findAllEvents);
  app.get("/api/event/:eventId", findEventById);
  app.get("/api/traveler/:travelerId/event", findAllEventsForTraveler);
  app.put("/api/event/:eventId", updateEvent);
  app.delete("/api/event/:eventId", deleteEvent);
  app.delete("/api/event/:eventId/:travelerId", removeTravelerFromEvent);

  function createEvent(req, res) {
    var travelerId = req.body.owner;
    var event = req.body;
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
    eventModel.findEventById(req.params['eventId'])
      .then(function (event) {
        // for every traveler in the event...
        for (var z = 0; z < event['travelers'].length; z++) {
            travelerModel.findTravelerById(event['travelers'][z]['_id'])
            .then(function (traveler) {
              // for every event in the traveler's events.
              for (var x = 0; x < traveler['events'].length; x++) {
                //if the event matches in what the traveler has, delete it.
                if (traveler['events'][x] == req.params['eventId']) {
                  traveler.events.splice(x, 1);
                  traveler.save();
                }
              }
              // then delete the whole event.
              eventModel.deleteEvent(req.params['eventId'])
                .then(function (event) {
                  res.json(event);
                });
            });
        }
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

  function removeTravelerFromEvent(req, res) {
    travelerModel.findTravelerById(req.params['travelerId'])
      .then(function (traveler) {
        for (var j = 0; j < traveler['events'].length; j++) {
          if (traveler['events'][j]['_id'] == req.params['eventsId']) {
            traveler['events'].splice(j, 1);
            traveler.save();
          }
        }

        eventModel.findEventById(req.params['eventId'])
          .then(function (event) {
            for (var i = 0; i < event['travelers'].length; i++) {
              if (event['travelers'][i]['_id'] == req.params['travelersId']) {
                event['travelers'].splice(i, 1);
                event.save();
                res.json(event);
              }
            }
          })

      });
  }
};
