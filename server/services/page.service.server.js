module.exports = function (app) {

  var PageModel = require("../../model/page/page.model.server");

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  function createPage(req, res) {
    var websiteId = req.params['websiteId'];
    var page = req.body;
    PageModel.createPage(websiteId, page)
      .then(function (page) {
        PageModel.findAllPagesForWebsite(websiteId)
          .then(function (theNewPages) {
            res.json(theNewPages);
          });
      });
  }

  function findAllPagesForWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    PageModel.findAllPagesForWebsite(websiteId)
      .then(function (websites) {
        res.json(websites);
      });
  }

  function findPageById(req, res) {
    PageModel.findPageById(req.params['pageId'])
      .then(function (page) {
        res.json(page);
      });
  }

  function updatePage(req, res) {
    PageModel.updatePage(req.params['pageId'], req.body)
      .then(function (pages) {
        res.json(pages);
      });
  }

  function deletePage(req, res) {
    PageModel.deletePage(req.params['pageId'])
      .then(function (pages) {
        res.json(pages);
      });
  }
};
