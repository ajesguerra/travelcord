module.exports = function (app) {

  var WidgetModel = require("../../model/widget/widget.model.server");

  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);

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
