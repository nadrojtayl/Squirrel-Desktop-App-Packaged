var express = require('express');
var fetch = require('./fetch.js');

var listener = express();

listener.listen(8367);

console.log('listener listening');

listener.get('/', function(req, res) {
  fetch.call();
  res.send('It worked, maybe.');
});