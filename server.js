var express = require('express');
var fs = require('fs');
var path = require('path');
var root = fs.realpathSync('.');

var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendFile(__dirname, 'index.html');
});

app.get('/*', function (req, res) {
    res.sendFile(__dirname, 'index.html');
});

app.listen(3000);
console.log('Listening on port 3000');