module.exports = function (app) {

  var bcrypt = require("bcrypt-nodejs");
  var passport  = require('passport');
  var TravelerModel = require("../../model/traveler/traveler.model.server");
  var LocalStrategy = require('passport-local').Strategy;
  var EventModel = require("../../model/event/event.model.server");

  passport.use(new LocalStrategy({usernameField:"email", passwordField:"password"}, localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  app.post('/api/loggedIn', loggedIn);
  app.post('/api/logout', logout);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/register', register);
  app.post("/api/traveler", createTraveler);
  app.post("/api/traveler/:travelerId/follow/:personToFollow", followTraveler);
  app.put("/api/traveler/:travelerId", updateTraveler);
  app.get("/api/traveler/all", findAllTravelers);
  app.get("/api/traveler/:travelerId", findTravelerById);
  app.get("/api/traveler", findTravelers);
  app.delete("/api/traveler/:travelerId", deleteTraveler);


  function localStrategy(email, password, done) {
    TravelerModel
      .findTravelerByEmail(email)
      .then(
        function(traveler) {
          if(traveler.email === email && bcrypt.compareSync(password, traveler.password)) {
            return done(null, traveler);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) {
            return done(err);
          }
        }
      );
  }

  function serializeUser(traveler, done) {
    done(null, traveler);
  }

  function deserializeUser(traveler, done) {
    TravelerModel
      .findTravelerById(traveler._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

  function login(req, res) {
    var traveler = req.user;
    TravelerModel.findTravelerById(traveler._id)
      .then(function (travelerFromModel) {
        if(travelerFromModel && (travelerFromModel.password === traveler.password)) {
          res.json(travelerFromModel);
        } else {
          res.json({});
        }
      });
  }

  function loggedIn(req, res) {
    if(req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register (req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);

    TravelerModel
      .createTraveler(user)
      .then(
        function(user){
          if(user){
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(user);
              }
            });
          }
        }
      );
  }

  function createTraveler(req, res) {
    const traveler = req.body;
    TravelerModel.createTraveler(traveler)
      .then(function (traveler) {
        res.json(traveler);
      });
  }



  function findAllTravelers(req, res) {
    TravelerModel.findAllTravelers()
      .then(function (travelers) {
        res.json(travelers);
      })
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

  function followTraveler(req, res) {
    const personToFollow = req.params['personToFollow'];
    const travelerId = req.params['travelerId'];
    TravelerModel.findTravelerById(travelerId)
      .then(function (traveler) {
        if (traveler.following.includes(personToFollow)) {
        } else {
          traveler.following.push(personToFollow);
          traveler.save();
        }
        res.json(traveler);
      })
  }
};
