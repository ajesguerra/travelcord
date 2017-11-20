module.exports = function (app) {

  var TravelerModel = require("../../model/traveler/traveler.model.server");
  var EventModel = require("../../model/event/event.model.server");

  app.post("/api/traveler", createTraveler);
  app.put("/api/traveler/:travelerId", updateTraveler);
  app.get("/api/traveler/:travelerId", findTravelerById);
  app.get("/api/traveler/:travelerId/event", findAllEventsForTraveler);
  app.get("/api/traveler", findTravelers);
  app.delete("/api/traveler/:travelerId", deleteTraveler);

  function createTraveler(req, res) {
    const traveler = req.body;
    TravelerModel.createTraveler(traveler)
      .then(function (traveler) {
        res.json(traveler);
      });
  }

  function findAllEventsForTraveler(req, res) {
    const travelerId = req.params['travelerId'];
    var eventList = [];
    TravelerModel.findTravelerById(travelerId)
      .then(function (traveler) {
        if (traveler) {
          res.json(traveler);
        } else {
          res.json({});
        }
      });
  }

  function findTravelerById(req, res) {
    var travelerId = req.params['travelerId'];
    TravelerModel.findTravelerById(travelerId)
      .then(function (traveler) {
        if (traveler) {
          res.json(traveler);
        } else {
          res.json({});
        }
      });
  }

  // This function just redirects depending on what information is available.
  function findTravelers(req, res) {
    var email = req.query["email"];
    var password = req.query["password"];
    if (email && password) {
      findTravelerByCredentials(req, res, email, password);
    } else if (email) {
      findTravelerByEmail(req, res, email);
    } else {
      res.json({});
    }
  }

  function findTravelerByCredentials(req, res, email, password) {
    TravelerModel.findTravelerByCredentials(email, password)
      .then(function (traveler) {
        if (traveler) {
          res.json(traveler);
        } else {
          res.json({});
        }
      });
  }

  function findTravelerByEmail(req, res, email) {
    TravelerModel.findTravelerByEmail(email)
      .then(function (traveler) {
        if (traveler) {
          res.json(traveler);
        } else {
          res.json(null);
        }
      });
  }

  function updateTraveler(req, res) {
    const updatedTraveler = req.body;
    const travelerId = req.params['travelerId'];
    TravelerModel.updateTraveler(travelerId, updatedTraveler)
      .then(function (updatedTraveler) {
        res.json(updatedTraveler);
      });
  }

  function deleteTraveler(req, res) {
    const travelerId = req.params['travelerId'];
    TravelerModel.deleteTraveler(travelerId)
      .then(function (traveler) {
        res.json(traveler);
      });
  }
};
