var express = require('express');
var app = express();

var routes = require("./routes/index.js");

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get("/about", routes.about);

var server = app.listen(81, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
