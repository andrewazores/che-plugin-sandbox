var express = require('express');
var app = express();

app.get('/test', function(req, res) {
  var response = {
    msg: 'Hello World'
  };
  res.send(JSON.stringify(response));
});

app.listen(8080);
