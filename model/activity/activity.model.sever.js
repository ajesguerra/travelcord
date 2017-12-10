var mongoose = require('mongoose');
var ActivitySchema = require("./activity.schema.server");
var ActivityModel = mongoose.model("ActivityModel", ActivitySchema);
var EventModel = require('../event/event.model.server');
var ActivitiesSuggestionModel = require('../activity/activitysuggestion.model.server');
var TravelerModel = require('../traveler/traveler.model.server');

ActivityModel.createActivity = createActivity;
ActivityModel.findActivityById = findActivityById;
ActivityModel.updateActivity = updateActivity;
ActivityModel.deleteActivity = deleteActivity;
ActivityModel.findAllActivities = findAllActivities;

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
    .populate({
      path: 'activitySuggestions',
      model: ActivitiesSuggestionModel,
      populate: {
        path: 'travelerUpVoters',
        model: TravelerModel
      }
    })
    .populate('decidedActivity')
    .populate('promotions')
    .exec();
}

function updateActivity(activityId, activity) {
  return ActivityModel.update({_id: activityId}, activity);
}

function deleteActivity(activityId) {
  return ActivityModel.deleteOne({_id: activityId});
}

function findAllActivities() {
  return ActivityModel.find()
    .populate({
      path: 'activitySuggestions',
      model: ActivitiesSuggestionModel,
      populate: {
        path: 'travelerUpVoters',
        model: TravelerModel
      }
    })
    .populate('promotions')
    .populate('decidedActivity')
    .exec();
}
