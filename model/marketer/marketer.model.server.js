var mongoose = require('mongoose');
var MarketerSchema = require("./marketer.schema.server");
var MarketerModel = mongoose.model("MarketerModel", MarketerSchema);
var PromotionModel = require('../promotion/promotion.model.server');

//are bound to the functions below. this is essentially defining the api.
MarketerModel.createMarketer = createMarketer;
MarketerModel.findAllMarketers = findAllMarketers;
MarketerModel.findMarketerById = findMarketerById;
MarketerModel.findMarketerByEmail = findMarketerByEmail;
MarketerModel.findMarketerByCredentials = findMarketerByCredentials;
MarketerModel.updateMarketer = updateMarketer;
MarketerModel.deleteMarketer = deleteMarketer;

module.exports = MarketerModel;

//call the db specific functions.
function createMarketer(marketer) {
  marketer.dateCreated = new Date(Date.now());
  return MarketerModel.create(marketer);
}

function findAllMarketers() {
  return MarketerModel.find();
}

function findMarketerById(marketerId) {
  return MarketerModel.findOne({_id: marketerId})
    .populate('promotions')
    .exec();
}

function findMarketerByEmail(email) {
  return MarketerModel.findOne({email: email});
}

function findMarketerByCredentials(email, password) {
  return MarketerModel.findOne({email: email, password: password});
}

function updateMarketer(marketerId, marketer) {
  return MarketerModel.update({_id: marketerId}, marketer);
}

function deleteMarketer(marketerId) {
  return MarketerModel.deleteOne({_id: marketerId});
}
