module.exports = function (app) {

  var eventModel = require('../../model/event/event.model.server');
  var activityModel = require('../../model/activity/activity.model.sever');
  var suggestionModel = require('../../model/activity/activitysuggestion.model.server');
  var travelerModel = require('../../model/traveler/traveler.model.server');

  app.post('/api/activity/:eventId/newActivity', createActivity);
  app.post('/api/activity/:activityId/markDecision/:suggestionId', markDecision);
  app.get('/api/activity/:eventId/allActivities', findAllActivitiesForEvent);
  app.get('/api/activity/:activityId', findActivityById);
  app.put('/api/activity/:activityId', updateActivity);
  app.delete('/api/activity/:activityId', deleteActivity);

  app.post('/api/suggestion/:activityId', addSuggestion);
  app.post('/api/suggestion/upvote/:suggestionId/:travelerId', upVote);
  app.post('/api/suggestion/unvote/:suggestionId/:travelerId', unVote);
  app.get('/api/suggestion/:suggestionId', findSuggestionById);

  /**
   app.get('/api/event/:eventId', findEventById);


   **/
  function createActivity(req, res) {
    var eventId = req.params['eventId'];
    var activity = req.body;
    suggestionModel.createSuggestion(null)
      .then(function (suggestion) {
        activity.decidedActivity = suggestion;
      });
    activity.isDecided = false;
    activityModel.createActivity(activity)
      .then(function (dbActivity) {
        eventModel.findEventById(eventId)
          .then(function (event) {
            event.activities.push(dbActivity);
            event.save();
            res.json(dbActivity);
          });
      });
  }

  function addSuggestion(req, res) {
    suggestionModel.createSuggestion(req.body)
      .then(function (dbSuggestion) {
        activityModel.findActivityById(req.params['activityId'])
          .then(function (activity) {
            activity.activitySuggestions.push(dbSuggestion);
            activity.save();
            res.json(dbSuggestion);
          })
      })
  }

  function findAllActivitiesForEvent(req, res) {
    eventModel.findEventById(req.params['eventId'])
      .then(function (event) {
        res.json(event.activities);
      });
  }

  function findActivityById(req, res) {
    activityModel.findActivityById(req.params['activityId'])
      .then(function (activity) {
        res.json(activity);
      });
  }

  function findSuggestionById(req, res) {
    suggestionModel.findSuggestionById(req.params['suggestionId'])
      .then(function (suggestion) {
        res.json(suggestion);
      });
  }

  function upVote(req, res) {
    suggestionModel.findSuggestionById(req.params['suggestionId'])
      .then(function (suggestion) {
        travelerModel.findTravelerById(req.params['travelerId'])
          .then(function (traveler) {
            var alreadyVoted = false;
            for (var i = 0; i < suggestion.travelerUpVoters.length; i++) {
              if (suggestion.travelerUpVoters[i]._id == req.params['travelerId']) {
                alreadyVoted = true;
              }
            }
            if (alreadyVoted) {
            } else {
              suggestion.travelerUpVoters.push(traveler);
              suggestion.save();
              traveler.suggestionUpVotes.push(req.params['suggestionId']);
              traveler.save();
            }

            res.json(suggestion);
          });
      });
  }

  function unVote(req, res) {
    console.log('unvoting in server');
    suggestionModel.findSuggestionById(req.params['suggestionId'])
      .then(function (suggestion) {
        travelerModel.findTravelerById(req.params['travelerId'])
          .then(function (traveler) {
            for (var i = 0; i < suggestion.travelerUpVoters.length; i++) {
              if (suggestion.travelerUpVoters[i]._id == req.params['travelerId']) {
                suggestion.travelerUpVoters.splice(i, 1);
                suggestion.save();
              }
            }
            for (var j = 0; j < traveler.suggestionUpVotes.length; j++) {
              if (traveler.suggestionUpVotes[j] == req.params['suggestionId']) {
                traveler.suggestionUpVotes.splice(j, 1);
                traveler.save();
              }
            }
            res.json(suggestion);
          });
      });
  }

  function markDecision(req, res) {
    activityModel.findActivityById(req.params['activityId'])
      .then(function (activity) {
        activity.isDecided = true;
        suggestionModel.findSuggestionById(req.params['suggestionId'])
          .then(function (suggestion) {
            activity.decidedActivity = suggestion;
            activity.save();
            res.json(activity);
          })
      })
  }

  function updateActivity(req, res) {
    activityModel.updateActivity(req.params['activityId'], req.body)
      .then(function (activity) {
        res.json(activity);
      });
  }

  function deleteActivity(req, res) {
    activityModel.deleteActivity(req.params['activityId'])
      .then(function (activity) {
        res.json(activity);
      });
  }
};
