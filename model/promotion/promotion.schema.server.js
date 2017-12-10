var mongoose = require('mongoose');

var PromotionSchema = mongoose.Schema ( {
  suggestionName: String,
  suggestionLocation: String,
  businessName: String,
  businessURL: String,
  dateCreated: Date,
  views: {
    type: Number,
    default: 0
  },
  markedAsDecision: {
    type: Number,
    default: 0
  },
  addedToActivitiesTotal: {
    type: Number,
    default: 0
  }
}, {collection: 'promotion'});

module.exports = PromotionSchema;
