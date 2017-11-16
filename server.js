
// Get the dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, x-requested-with, Content-Type, Accept, authorization, client-security-token, Accept-Encoding");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


const port = process.env.PORT || '3100';
app.set('port', port);
const server = http.createServer(app);

require("./server/app")(app);
server.listen( port );


// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


