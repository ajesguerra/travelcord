module.exports = function (app) {

  var WidgetModel = require("../../model/widget/widget.model.server");

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

    var pageId = req.params['pageId'];
    var widget = req.body;
    WidgetModel.createWidget(pageId, widget)
      .then(function (theWidget) {
        WidgetModel.findAllWidgetsForPage(pageId)
          .then(function (widgets) {
            res.json(widgets);
          });
      });
  }

  function findAllWidgetsForPage(req, res) {
    const pageId = req.params['pageId'];
    WidgetModel.findAllWidgetsForPage(pageId)
      .then(function (widgets) {
        res.json(widgets);
      });
  }

  function findWidgetById(req, res) {
    WidgetModel.findWidgetById(req.params['widgetId'])
      .then(function (widget) {
        res.json(widget);
      });
  }

  function updateWidget(req, res) {
    WidgetModel.updateWidget(req.params['widgetId'], req.body)
      .then(function (widgets) {
        res.json(widgets);
      });
  }

  function deleteWidget(req, res) {
    WidgetModel.deleteWidget(req.params['widgetId'])
      .then(function (widgets) {
        res.json(widgets);
      });
  }
};
