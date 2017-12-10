module.exports = function (app) {

  var PromotionModel = require("../../model/promotion/promotion.model.server");
  var travelerModel = require("../../model/traveler/traveler.model.server");

  app.post('/api/promotion/:travelerId/newPromotion', createPromotion);


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
    PromotionModel.createPromotion(req.params['travelerId'], req.body)
      .then(function (promotion) {
        res.json(promotion);
      });
  }

  function addSuggestion(req, res) {
  }

  function findAllActivitiesForEvent(req, res) {
  }

  function findPromotionById(req, res) {
  }

  function findSuggestionById(req, res) {
  }

  function upVote(req, res) {
  }

  function unVote(req, res) {
  }

  function markDecision(req, res) {
  }

  function updatePromotion(req, res) {
  }

  function deletePromotion(req, res) {
  }
};
