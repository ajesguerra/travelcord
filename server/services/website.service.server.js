module.exports = function (app) {
  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  websites = [
    { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  ];

  function createWebsite(req, res) {
    this.websites.push(req.body);
    res.json(req.body);
  }

  function findAllWebsitesForUser(req, res) {
    const userId = req.params['userId'];
    const websitesByTheUser = [];
    for (var x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        websitesByTheUser.push(this.websites[x]);
      }
    }
    res.json(websitesByTheUser);
  }

  function findWebsiteById(req, res) {
    for (var x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === req.params['websiteId']) {
        res.json(this.websites[x]);
        return;
      }
    }
  }

  function updateWebsite(req, res) {
    for (var x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === req.params['websiteId']) {
        this.websites[x] = req.body;
        res.json(req.body);
        return;
      }
    }
  }

  function deleteWebsite(req, res) {
    for (var x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === req.params['websiteId']) {
        this.websites.splice(x, 1);
        res.json({});
        return;
      }
    }
  }
};
