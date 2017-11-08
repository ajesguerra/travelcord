module.exports = function (app) {

  var websiteModel = require("../../model/website/website.model.server");

  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  function createWebsite(req, res) {
    var userId = req.params['userId'];
    var website = req.body;
    website.developerId = userId;
    websiteModel.createWebsiteForUser(userId, website)
      .then(function (website) {
        websiteModel.findAllWebsitesForUser(userId)
          .then(function (websites) {
            res.json(websites);
          });
      });
  }

  function findAllWebsitesForUser(req, res) {
    const userId = req.params['userId'];
    websiteModel.findAllWebsitesForUser(userId)
      .then(function (websites) {
        res.json(websites);
      });
  }

  function findWebsiteById(req, res) {
    websiteModel.findWebsiteById(req.params['websiteId'])
      .then(function (websites) {
        res.json(websites);
      });
  }

  function updateWebsite(req, res) {
    websiteModel.updateWebsite(req.params['websiteId'], req.body)
      .then(function (websites) {
        res.json(websites);
      });
  }

  function deleteWebsite(req, res) {
    websiteModel.deleteWebsite(req.params['websiteId'])
      .then(function (websites) {
        res.json(websites);
      });
  }
};
