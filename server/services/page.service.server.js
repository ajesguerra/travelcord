module.exports = function (app) {

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  ];

  function createPage(req, res) {
    this.pages.push(req.body);
    res.json(req.body);
    return;
  }

  function findAllPagesForWebsite(req, res) {
    const websiteId = req.params['websiteId'];
    const pagesForWebsite = [];
    for (var x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        pagesForWebsite.push(this.pages[x]);
      }
    }
    res.json(pagesForWebsite);
  }

};
