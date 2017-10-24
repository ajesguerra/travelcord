module.exports = function (app) {

  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", findUsers);
  app.delete("/api/user/:userId", deleteUser);

  users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder'},
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley'},
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia'},
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi'}
  ];

  function findUserById(req, res) {
    var userId = req.params['userId'];
    var user = users.find(function (user) {
      return user._id === userId;
    });
    if (user) {
      res.json(user);
    } else {
      res.json({});
    }
  }

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
    var user = users.find(function (user) {
      return (user.username === username && user.password === password);
    });
    if (user) {
      res.json(user);
    } else {
      res.json({});
    }
  }

  function findUserByUsername(req, res, username) {
    var user = users.find(function (user) {
      return (user.username === username);
    });
    res.json(user);
  }

  function createUser(req, res) {
    const user = req.body;
    users.push(user);
    res.json(user);
    return;
  }

  function updateUser(req, res) {
    const updatedUser = req.body;
    const userId = req.params['userId'];
    for (var x = 0; x < users.length; x++) {
      if (users[x]._id === userId) {
        users[x] = updatedUser;
        res.json(updatedUser);
        return;
      }
    }
  }

  function deleteUser(req, res) {
    const user = req.body;
    const userId = req.params['userId'];
    for (var x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users.splice(x, 1);
        res.json(user);
        return;
      }
    }
  }
};
