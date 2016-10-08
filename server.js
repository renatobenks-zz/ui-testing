'use strict';

var express = require('express');
var app = express();

var filesLoad = ['app', 'public_html', 'lib', 'bower_components'];
for (var file in filesLoad) {
    app.use(express.static(filesLoad[file]));
}

app.get('/', function (req, res) {
   res.sendFile( __dirname + '/app/' + 'index.html' );
});

var server = app.listen(9000, function () {
  var port = server.address().port;
  console.log('App listening at http://localhost:' + port);
});
