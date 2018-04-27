var express = require('express');

var app = express();

app.use(express.static(__dirname + '/pages'));

app.listen(3000, function () {
    console.log('Running on port 3000');
});