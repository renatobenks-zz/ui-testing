/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public_html'));
app.use(express.static('lib'));
app.use(express.static('app'));
app.use(express.static('bower_components'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/app/" + "index.html" );
});

app.post('/processar', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://:"+host+port);

});