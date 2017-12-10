var mongoose = require('mongoose');

var MarketerSchema = mongoose.Schema ( {
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  phone: String,
  dateCreated: Date,
  promotions: [{type:mongoose.Schema.Types.ObjectId, ref: 'PromotionModel'}]
}, {collection: 'marketer'});

module.exports = MarketerSchema;
