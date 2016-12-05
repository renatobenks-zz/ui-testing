'use strict';

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');



var filesLoad = ['app', 'bower_components'];
for (var file in filesLoad) {
    app.use(express.static(filesLoad[file]));
}

app.use(cookieParser());

app.get('/', function (req, res) {
    res.render(__dirname + '/app/');
});

app.get('/dashboard', function (req, res) {
    res.render(__dirname + '/app/src/views/dashboard.html');
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('App listening at http://localhost:' + port);
});
