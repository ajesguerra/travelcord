var WidgetSchema = require("./widget.schema.server");
var mongoose = require('mongoose');
var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);
var PageModel = require('../page/page.model.server');

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidget = reorderWidget;

module.exports = WidgetModel;

function createWidget(pageId, widget){
  var newWidget = null;
  return WidgetModel.create(widget)
    .then(function (theWidget) {
      newWidget = theWidget;
      PageModel.findPageById(pageId)
        .then(function (page) {
          page.widgets.push(newWidget);
          return page.save();
        });
    });
}

function findAllWidgetsForPage(pageId) {
  return WidgetModel.find({pageId: pageId})
    .populate('pageId')
    .exec();
}

function findWidgetById(widgetId) {
  return PageModel.findOne({_id: widgetId});
}

function updateWidget(widgetId, widget) {
  return PageModel.update({_id: widgetId}, widget);
}

function deleteWidget(widgetId) {
  return PageModel.deleteOne({_id: widgetId});
}

function reorderWidget(pageId, start, end) {

}
