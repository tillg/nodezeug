var express = require('express');
var app = express();

var hostname = '127.0.0.1';
var port = 3000;

app.get('/', function (req, res) {
    res.json({
        hello: 'world'
    });
});

var server = app.listen(3000, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});
