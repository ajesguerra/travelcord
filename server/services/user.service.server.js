module.exports = function (app) {

  var userModel = require("../../model/user/user.model.server");

  function createUser(req, res) {
    const user = req.body;
    userModel.createUser(user)
      .then(function (user) {
        res.json(user);
      });
  }

  function findUserById(req, res) {
    var userId = req.params['userId'];
    userModel.findUserById(userId)
      .then(function (user) {
      if (user) {
        res.json(user);
      } else {
        res.json({});
      }
    });
  }

  // This function just redirects depending on what information is available.
  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      findUserByCredentials(req, res, username, password);
    } else if (username) {
      findUserByUsername(req, res, username);
    } else {
      res.json({});
    }
  }

  function findUserByCredentials(req, res, username, password) {
    userModel.findUserByCredentials(username, password)
      .then(function (user) {
        if (user) {
          res.json(user);
        } else {
          res.json({});
        }
      });
  }

  function findUserByUsername(req, res, username) {
    userModel.findUserByUsername(username)
      .then(function (user) {
        if (user) {
          res.json(user);
        } else {
          res.json(null);
        }
      });
  }

  function updateUser(req, res) {
    const updatedUser = req.body;
    const userId = req.params['userId'];
    userModel.updateUser(userId, updatedUser)
      .then(function (updatedUser) {
        res.json(updatedUser);
      });
  }

  function deleteUser(req, res) {
    const userId = req.params['userId'];
    userModel.deleteUser(userId)
      .then(function (user) {
        res.json(user);
      });
  }
};
