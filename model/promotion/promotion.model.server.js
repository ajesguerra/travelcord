var mongoose = require('mongoose');
var PromotionSchema = require("./promotion.schema.server");
var PromotionModel = mongoose.model("PromotionModel", PromotionSchema);

PromotionModel.createPromotion = createPromotion;
PromotionModel.findPromotionById = findPromotionById;
PromotionModel.updatePromotion = updatePromotion;
PromotionModel.deletePromotion = deletePromotion;

module.exports = PromotionModel;

function createPromotion(promotion) {
  return PromotionModel.create(promotion);
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
