module.exports = function (app) {

  var eventModel = require('../../model/event/event.model.server');
  var activityModel = require('../../model/activity/activity.model.sever');
  var suggestionModel = require('../../model/activity/activitysuggestion.model.server');
  var travelerModel = require('../../model/traveler/traveler.model.server');

  app.get('/api/suggestion/:suggestionId', findSuggestionById);
  app.put('/api/suggestion/:suggestionId', updateSuggestion);
  app.delete('/api/suggestion/:activityId/:suggestionId', deleteSuggestion);

  function findSuggestionById(req, res) {
    suggestionModel.findSuggestionById(req.params['suggestionId'])
      .then(function (suggestion) {
        res.json(suggestion);
      })
  }

  function updateSuggestion(req, res) {
    suggestionModel.updateSuggestion(req.params['suggestionId'], req.body)
      .then(function (suggestion) {
        res.json(suggestion);
      });
  }

  function deleteSuggestion(req, res) {
    // Delete the suggestion from the activity.
    activityModel.findActivityById(req.params['activityId'])
      .then(function (activity) {
        // Find every case of the suggestion in the activity.
        for (var j = 0; j < activity.activitySuggestions.length; j++) {
          if (activity.activitySuggestions[j]._id == req.params['suggestionId']) {
            // Delete it.
            activity.activitySuggestions.splice(j, 1);
            activity.save();
          }
        }
        //Check if the decided activity is also the suggestion you are deleting. If so, remove it and make activity undecided.
        if (activity.decidedActivity._id == req.params['suggestionId']) {
          activity.decidedActivity = null;
          activity.isDecided = false;
          activity.save();
        }

        // Then delete the suggestion.
        suggestionModel.deleteSuggestion(req.params['suggestionId'])
          .then(function (suggestion) {
            res.json(suggestion);
          });

      });
  }
};
