module.exports = function (app) {

  var bcrypt = require("bcrypt-nodejs");
  var passport  = require('passport');
  var MarketerModel = require("../../model/marketer/marketer.model.server");
  var LocalStrategy = require('passport-local').Strategy;

  passport.use(new LocalStrategy({usernameField:"email", passwordField:"password"}, localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  app.post('/api/loggedIn/marketer', loggedIn);
  app.post('/api/logout/marketer', logout);
  app.post('/api/login/marketer', passport.authenticate('local'), login);
  app.post('/api/register/marketer', register);
  app.post("/api/marketer", createMarketer);
  app.put("/api/marketer/:marketerId", updateMarketer);
  app.get("/api/marketer/all", findAllMarketers);
  app.get("/api/marketer/:marketerId", findMarketerById);
  app.get("/api/marketer", findMarketers);
  app.delete("/api/marketer/:marketerId", deleteMarketer);


  function localStrategy(email, password, done) {
    console.log('in marketer localstrategy');
    MarketerModel
      .findMarketerByEmail(email)
      .then(
        function(marketer) {
          console.log('found marketer by email');
          if(marketer.email === email && bcrypt.compareSync(password, marketer.password)) {
            return done(null, marketer);
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

  function serializeUser(marketer, done) {
    console.log('serialize marketer');
    done(null, marketer);
  }

  function deserializeUser(marketer, done) {
    console.log('deserialize marketer');
    MarketerModel
      .findMarketerById(marketer._id)
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
    console.log('trying to login as marketer');
    var marketer = req.user;
    console.log(marketer);
    MarketerModel.findMarketerById(marketer._id)
      .then(function (marketerFromModel) {
        if(marketerFromModel && (marketerFromModel.password === marketer.password)) {
          res.json(marketerFromModel);
        } else {
          res.json({});
        }
      });
  }

  function loggedIn(req, res) {
    console.log('loggedin marketer');
    if(req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

  function logout(req, res) {
    console.log('logout marketer');
    req.logOut();
    res.send(200);
  }

  function register (req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);

    MarketerModel
      .createMarketer(user)
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

  function createMarketer(req, res) {
    const marketer = req.body;
    MarketerModel.createMarketer(marketer)
      .then(function (marketer) {
        res.json(marketer);
      });
  }



  function findAllMarketers(req, res) {
    MarketerModel.findAllMarketers()
      .then(function (marketers) {
        res.json(marketers);
      })
  }

  function findMarketerById(req, res) {
    var marketerId = req.params['marketerId'];
    MarketerModel.findMarketerById(marketerId)
      .then(function (marketer) {
        if (marketer) {
          res.json(marketer);
        } else {
          res.json({});
        }
      });
  }

  // This function just redirects depending on what information is available.
  function findMarketers(req, res) {
    var email = req.query["email"];
    var password = req.query["password"];
    if (email && password) {
      findMarketerByCredentials(req, res, email, password);
    } else if (email) {
      findMarketerByEmail(req, res, email);
    } else {
      res.json({});
    }
  }

  function findMarketerByCredentials(req, res, email, password) {
    MarketerModel.findMarketerByCredentials(email, password)
      .then(function (marketer) {
        if (marketer) {
          res.json(marketer);
        } else {
          res.json({});
        }
      });
  }

  function findMarketerByEmail(req, res, email) {
    MarketerModel.findMarketerByEmail(email)
      .then(function (marketer) {
        if (marketer) {
          res.json(marketer);
        } else {
          res.json(null);
        }
      });
  }

  function updateMarketer(req, res) {
    const updatedMarketer = req.body;
    const marketerId = req.params['marketerId'];
    MarketerModel.updateMarketer(marketerId, updatedMarketer)
      .then(function (updatedMarketer) {
        res.json(updatedMarketer);
      });
  }

  function deleteMarketer(req, res) {
    const marketerId = req.params['marketerId'];
    MarketerModel.deleteMarketer(marketerId)
      .then(function (marketer) {
        res.json(marketer);
      });
  }
};
