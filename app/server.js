'use strict';

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var filesLoad = ['app', 'bower_components'];
for (var file in filesLoad) {
    app.use(express.static(filesLoad[file]));
}

app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render(__dirname);
});

app.get('/dashboard', function (req, res) {
    res.render(__dirname + '/src/views/dashboard/dashboard',
        { title: 'Dashboard' }
    );
});

app.post('/validate-cpf', function (req, res) {
    console.log(req.body.cpf);
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('App listening at http://localhost:' + port);
});
