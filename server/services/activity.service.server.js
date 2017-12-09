module.exports = function (app) {

  var eventModel = require('../../model/event/event.model.server');
  var activityModel = require('../../model/activity/activity.model.sever');
  var suggestionModel = require('../../model/activity/activitysuggestion.model.server');
  var travelerModel = require('../../model/traveler/traveler.model.server');

  app.post('/api/activity/:eventId/newActivity', createActivity);
  app.get('/api/activity/:eventId/allActivities', findAllActivitiesForEvent);
  app.get('/api/activity/:activityId', findActivityById);

  app.post('/api/suggestion/:activityId', addSuggestion);
  app.post('/api/suggestion/upvote/:suggestionId/:travelerId', upVote);
  app.get('/api/suggestion/:suggestionId', findSuggestionById);

  /**
   app.get('/api/event/:eventId', findEventById);
   app.put('/api/traveler/:eventId', updateEvent);
   app.delete('/api/traveler/:eventId', deleteEvent);
   **/
  function createActivity(req, res) {
    var eventId = req.params['eventId'];
    var activity = req.body;
    console.log(activity);
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
    console.log('trying to up upvote for ');
    suggestionModel.findSuggestionById(req.params['suggestionId'])
      .then(function (suggestion) {
        console.log('found suggestion: ' + suggestion);
        travelerModel.findTravelerById(req.params['travelerId'])
          .then(function (traveler) {
            if (suggestion.travelerUpVoters.includes(req.params['travelerId']) > 0) {
            } else {
              suggestion.travelerUpVoters.push(req.params['travelerId']);
              suggestion.save();
            }
            if (traveler.suggestionUpVotes.includes(req.params['suggestionId'])) {
            } else {
              traveler.suggestionUpVotes.push(req.params['suggestionId']);
              traveler.save();
            }
            res.json(suggestion);
          });
      });
  }
};
