var mongoose = require('mongoose');
var PromotionSchema = require("./promotion.schema.server");
var PromotionModel = mongoose.model("PromotionModel", PromotionSchema);
var TravelerModel = require('../traveler/traveler.model.server');

PromotionModel.createPromotion = createPromotion;
PromotionModel.findPromotionById = findPromotionById;
PromotionModel.updatePromotion = updatePromotion;
PromotionModel.deletePromotion = deletePromotion;

module.exports = PromotionModel;

function createPromotion(travelerId, promotion) {
  promotion.dateCreated = new Date(Date.now());
  return PromotionModel.create(promotion)
    .then(function (dbPromotion) {
      TravelerModel.findTravelerById(travelerId)
        .then(function (traveler) {
          traveler.myPromotions.push(dbPromotion);
          traveler.save();
        });
      return dbPromotion;
    });
}

function findPromotionById(promotionId) {
  return PromotionModel.findOne({_id: promotionId});
}

function updatePromotion(promotionId, promotion) {
  return PromotionModel.update({_id: promotionId}, promotion);
}

function deletePromotion(promotionId) {
  return PromotionModel.deleteOne({_id: promotionId});
}
