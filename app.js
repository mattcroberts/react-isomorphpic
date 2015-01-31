require('node-jsx').install({extension:'.jsx'});


var React = require('react');
var Clock = require('./views/ClockComponent');
var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send(React.renderToString(React.createElement(Clock)));
});

app.listen(3000);