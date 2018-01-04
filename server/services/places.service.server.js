module.exports = function (app) {

  const https = require('https');
  app.get("/api/places/placesAutoComplete/:searchTerm", placesAutoComplete);
  app.get("/api/places/queryAutoComplete/:searchTerm", queryAutoComplete);
  app.get("/api/places/textSearch/:searchTerm", textSearch);
  app.get("/api/places/details/:placeid", placeDetails);
  app.get("/api/places/photo/:photoreference", placePhoto);

  var googleMapsClient = require('@google/maps').createClient({
    key: process.env.PLACES_KEY;
  });

  function placesAutoComplete(req, res) {
    var word = req.params['searchTerm'];

    googleMapsClient.placesAutoComplete({
      input: word,
      language: 'en'
    }, function (err, response) {
      if (!err) {
        res.send(response.json.predictions);
      }
    });
  }

  function queryAutoComplete(req, res) {
    var word = req.params['searchTerm'];

    googleMapsClient.placesQueryAutoComplete({
      input: word,
      language: 'en'
    }, function (err, response) {
      if (!err) {
        res.send(response.json.predictions);
      }
    });
  }

  function textSearch(req, res) {
    var word = req.params['searchTerm'];

    googleMapsClient.places({
      query: word,
      language: 'en'
    }, function (err, response) {
      if (!err) {
        res.send(response.json.predictions);
      }
    });
  }

  function placeDetails(req, res) {
    var placeid = req.params['placeid'];
    googleMapsClient.place({
      placeid: placeid,
      language: 'en'
    }, function (err, response) {
      if (!err) {
        res.send(response.json.result);
      }
    });
  }

  function placePhoto(req, res) {
    var photoreference = req.params['photoreference'];

    googleMapsClient.placesPhoto({
      photoreference: photoreference,
      maxwidth: 500,
      maxheight: 500
    }, function (err, response) {
      if (!err) {
        res.send(response.json.predictions);
      }
    });
  }
};
