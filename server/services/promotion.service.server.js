module.exports = function (app) {

  var PromotionModel = require("../../model/promotion/promotion.model.server");
  var travelerModel = require("../../model/traveler/traveler.model.server");
  var ActivityModel = require("../../model/activity/activity.model.sever");

  app.post('/api/promotion/:travelerId/newPromotion', createPromotion);
  app.get('/api/promotion/:promotionId', findPromotionById);
  app.put('/api/promotion/update', updatePromotion);
  app.delete('/api/promotion/delete/:promotionId/:travelerId', deletePromotion);
  app.delete('/api/promotion/deleteOne/:promotionId/:activityId', removePromotionForMe);
  app.put('/api/promotion/deploy/:promotionId', deployPromotion);
  //everything above this line has been completed.

  app.post('/api/promotion/:promotionId/markDecision/:suggestionId', markDecision);
  app.get('/api/promotion/:eventId/allActivities', findAllActivitiesForEvent);

  app.post('/api/suggestion/:promotionId', addSuggestion);
  app.post('/api/suggestion/upvote/:suggestionId/:travelerId', upVote);
  app.post('/api/suggestion/unvote/:suggestionId/:travelerId', unVote);
  app.get('/api/suggestion/:suggestionId', findSuggestionById);

  function createPromotion(req, res) {
    PromotionModel.createPromotion(req.params['travelerId'], req.body)
      .then(function (promotion) {
        res.json(promotion);
      });
  }

  function findPromotionById(req, res) {
    PromotionModel.findPromotionById(req.params['promotionId'])
      .then(function (promotion) {
        res.json(promotion);
      })
  }

  function updatePromotion(req, res) {
    PromotionModel.updatePromotion(req.body['_id'], req.body)
      .then(function (promotion) {
        res.json(promotion);
      })
  }

  function deletePromotion(req, res) {
    travelerModel.findTravelerById(req.params['travelerId'])
      .then(function (traveler) {
        for (var i = 0; i < traveler['myPromotions'].length; i++) {
          if (traveler['myPromotions'][i]['_id'] == req.params['promotionId']) {
            traveler.myPromotions.splice(i, 1);
            traveler.save();
          }
        }

        ActivityModel.findAllActivities()
          .then(function (allActivities) {
            for (var x = 0; x < allActivities.length; x++) {
              for (var a = 0; a < allActivities[x]['activitySuggestions'].length; a++) {
                console.log(allActivities[x]['activitySuggestions'][a]);
                if (allActivities[x]['activitySuggestions'][a]['_id'] == req.params['promotionId']) {
                  allActivities[x]['activitySuggestions'].splice(a, 1);
                  allActivities[x]['activitySuggestions'].save();
                  allActivities[x].save();
                  allActivities.save();
                }
              }
            }
          });

        PromotionModel.deletePromotion(req.params['promotionId'])
          .then(function (promotion) {
            res.json(promotion);
          });
      });
  }

  function deployPromotion(req, res) {
    ActivityModel.findAllActivities()
      .then(function (allActivities) {
        for (var x = 0; x < allActivities.length; x++) {
          allActivities[x]['promotions'].push(req.body);
          allActivities[x].save();
          res.json(req.body);
        }
      });
  }

  function removePromotionForMe(req, res) {
    ActivityModel.findActivityById(req.params['activityId'])
      .then(function (activity) {
        for (var i = 0; i < activity['promotions'].length; i++) {
          if (activity['promotions'][i]['_id'] == req.params['promotionId']) {
            console.log('trying to splice');
            activity.promotions.splice(i, 1);
            activity.save();
            res.send(activity);
          }
        }
      });
  }

  function addSuggestion(req, res) {
  }

  function findAllActivitiesForEvent(req, res) {
  }

  function findSuggestionById(req, res) {
  }

  function upVote(req, res) {
  }

  function unVote(req, res) {
  }

  function markDecision(req, res) {
  }

};
