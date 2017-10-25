module.exports = function (app) {

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);

  widgets = [
    { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'},
    { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lordsafsdem ipsum</p>'},
    { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '50%',
      'url': 'https://www.youtube.com/embed/VkMU1mKdwPI?ecver=1' },
    { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];

  function createWidget(req, res) {
    this.widgets.push(req.body);
    res.json(req.body);
  }

  function findAllWidgetsForPage(req, res) {
    const widgetsByThisPageId = [];
    for (var x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === req.params['pageId']) {
        widgetsByThisPageId.push(this.widgets[x]);
      }
    }
    res.json(widgetsByThisPageId);
  }

  function findWidgetById(req, res) {
    for (var x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === req.params['widgetId']) {
        res.json(this.widgets[x]);
        return;
      }
    }
    res.json(null);
  }

  function updateWidget(req, res) {
    for (var x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === req.params['widgetId']) {
        // this.widgets[x] = widget; // can do this too
        this.widgets.splice(x, 1);
      }
    }
    this.widgets.push(req.body);
    res.json(widgets);
  }

  function deleteWidget(req, res) {
    for (var x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === req.params['widgetId']) {
        this.widgets.splice(x, 1);
      }
    }
    res.json(widgets);
  }
};
