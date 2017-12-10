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
  console.log(activity);
  return ActivityModel.create(activity)
    .then(function (dbActivity) {
      console.log(dbActivity);
      return dbActivity;
    });
}

function findActivityById(activityId) {
  return ActivityModel.findOne({_id: activityId})
    .populate('decidedActivity')
    .exec();
}

function updateActivity(activityId, activity) {
  return ActivityModel.update({_id: activityId}, activity);
}

function deleteActivity(activityId) {
  return ActivityModel.deleteOne({_id: activityId});
}
