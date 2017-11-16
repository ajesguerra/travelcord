var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/project5610'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds111476.mlab.com:11476/heroku_9vnm867v'; // use yours
}

var db = mongoose.connect(connectionString, {useMongoClient: true});

module.exports = db;
