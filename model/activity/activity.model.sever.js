var mongoose = require('mongoose');
var ActivitySchema = require("./activity.schema.server");
var ActivityModel = mongoose.model("ActivityModel", ActivitySchema);
var EventModel = require('../event/event.model.server');

ActivityModel.createActivity = createActivity;
ActivityModel.findActivityById = findActivityById;
ActivityModel.updateActivity = updateActivity;
ActivityModel.deleteActivity = deleteActivity;

module.exports = ActivityModel;

function createActivity(activity) {
  return ActivityModel.create(activity)
    .then(function (dbActivity) {
      return dbActivity;
    });
}

function findActivityById(activityId) {
  return ActivityModel.findOne({_id: activityId})
    .populate('decidedActivity')
    .exec();
}

function updateActivity(eventId, event) {
  return EventModel.update({_id: eventId}, event);
}

function deleteActivity(eventId) {
  return EventModel.deleteOne({_id: eventId});
}
