module.exports = function (app) {

  var PromotionModel = require("../../model/promotion/promotion.model.server");
  var travelerModel = require("../../model/traveler/traveler.model.server");

  app.post('/api/promotion/:travelerId/newPromotion', createPromotion);
  app.get('/api/promotion/:promotionId', findPromotionById);
  app.put('/api/promotion/update', updatePromotion);
  app.delete('/api/promotion/delete/:promotionId/:travelerId', deletePromotion);
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
          console.log(traveler['myPromotions'][i]);
          if (traveler['myPromotions'][i]['_id'] == req.params['promotionId']) {
            traveler.myPromotions.splice(i, 1);
            traveler.save();
          }
        }

        PromotionModel.deletePromotion(req.params['promotionId'])
          .then(function (promotion) {
            res.json(promotion);
          });
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
