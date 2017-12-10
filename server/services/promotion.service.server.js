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
    PromotionModel.findPromotionById(req.params['promotionId'])
      .then(function (promotion) {
        ActivityModel.findAllActivities()
          .then(function (allActivities) {
            for (var x = 0; x < allActivities.length; x++) {
              allActivities[x]['promotions'].push(req.body);
              allActivities[x].save();
              promotion.addedToActivitiesTotal += 1;
              promotion.save();
            }
            res.json(req.body);
          });
      });
  }

  function removePromotionForMe(req, res) {
    ActivityModel.findActivityById(req.params['activityId'])
      .then(function (activity) {
        for (var i = 0; i < activity['promotions'].length; i++) {
          if (activity['promotions'][i]['_id'] == req.params['promotionId']) {
            activity.promotions.splice(i, 1);
            activity.save();
            res.send(activity);
          }
        }
      });
  }
};
