var mongoose = require('mongoose');

var PromotionSchema = mongoose.Schema ( {
  suggestionName: String,
  suggestionLocation: String,
  businessName: String,
  businessURL: String,
  dateCreated: Date,
  views: Number,
  markedAsDecision: Number,
  addedToActivitiesTotal: Number
}, {collection: 'promotion'});

module.exports = PromotionSchema;
