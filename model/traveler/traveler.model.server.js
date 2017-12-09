var mongoose = require('mongoose');
var TravelerSchema = require("./traveler.schema.server");
var TravelerModel = mongoose.model("TravelerModel", TravelerSchema);

//are bound to the functions below. this is essentially defining the api.
TravelerModel.createTraveler = createTraveler;
TravelerModel.findAllEventsForTraveler = findAllEventsForTraveler;
TravelerModel.findAllTravelers = findAllTravelers;
TravelerModel.findTravelerById = findTravelerById;
TravelerModel.findTravelerByEmail = findTravelerByEmail;
TravelerModel.findTravelerByCredentials = findTravelerByCredentials;
TravelerModel.updateTraveler = updateTraveler;
TravelerModel.deleteTraveler = deleteTraveler;

module.exports = TravelerModel;

//call the db specific functions.
function createTraveler(traveler) {
  traveler.dateCreated = new Date(Date.now());
  return TravelerModel.create(traveler);
}

function findAllEventsForTraveler(travelerId) {
  return TravelerModel.find({_id: travelerId});
}

function findAllTravelers() {
  return TravelerModel.find();
}

function findTravelerById(travelerId) {
  return TravelerModel.findOne({_id: travelerId});
}

function findTravelerByEmail(email) {
  return TravelerModel.findOne({email: email});
}

function findTravelerByCredentials(email, password) {
  return TravelerModel.findOne({email: email, password: password});
}

function updateTraveler(travelerId, traveler) {
  return TravelerModel.update({_id: travelerId}, traveler);
}

function deleteTraveler(travelerId) {
  return TravelerModel.deleteOne({_id: travelerId});
}
