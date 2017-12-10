module.exports = function (app) {

  var eventModel = require('../../model/event/event.model.server');
  var promotionModel = require('../../model/promotion/promotion.model.sever');
  var suggestionModel = require('../../model/promotion/promotionsuggestion.model.server');
  var travelerModel = require('../../model/traveler/traveler.model.server');

  app.post('/api/promotion/:eventId/newPromotion', createPromotion);
  app.post('/api/promotion/:promotionId/markDecision/:suggestionId', markDecision);
  app.get('/api/promotion/:eventId/allActivities', findAllActivitiesForEvent);
  app.get('/api/promotion/:promotionId', findPromotionById);
  app.put('/api/promotion/:promotionId', updatePromotion);
  app.delete('/api/promotion/:promotionId', deletePromotion);

  app.post('/api/suggestion/:promotionId', addSuggestion);
  app.post('/api/suggestion/upvote/:suggestionId/:travelerId', upVote);
  app.post('/api/suggestion/unvote/:suggestionId/:travelerId', unVote);
  app.get('/api/suggestion/:suggestionId', findSuggestionById);

  function createPromotion(req, res) {
    var eventId = req.params['eventId'];
    var promotion = req.body;
    suggestionModel.createSuggestion(null)
      .then(function (suggestion) {
        promotion.decidedPromotion = suggestion;
      });
    promotion.isDecided = false;
    promotionModel.createPromotion(promotion)
      .then(function (dbPromotion) {
        eventModel.findEventById(eventId)
          .then(function (event) {
            event.activities.push(dbPromotion);
            event.save();
            res.json(dbPromotion);
          });
      });
  }

  function addSuggestion(req, res) {
    suggestionModel.createSuggestion(req.body)
      .then(function (dbSuggestion) {
        promotionModel.findPromotionById(req.params['promotionId'])
          .then(function (promotion) {
            promotion.promotionSuggestions.push(dbSuggestion);
            promotion.save();
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

  function findPromotionById(req, res) {
    promotionModel.findPromotionById(req.params['promotionId'])
      .then(function (promotion) {
        res.json(promotion);
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
    promotionModel.findPromotionById(req.params['promotionId'])
      .then(function (promotion) {
        promotion.isDecided = true;
        suggestionModel.findSuggestionById(req.params['suggestionId'])
          .then(function (suggestion) {
            promotion.decidedPromotion = suggestion;
            promotion.save();
            res.json(promotion);
          })
      })
  }

  function updatePromotion(req, res) {
    promotionModel.updatePromotion(req.params['promotionId'], req.body)
      .then(function (promotion) {
        res.json(promotion);
      });
  }

  function deletePromotion(req, res) {
    promotionModel.deletePromotion(req.params['promotionId'])
      .then(function (promotion) {
        res.json(promotion);
      });
  }
};
