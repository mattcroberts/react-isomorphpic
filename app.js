require('node-jsx').install({extension:'.jsx'});

var ejs = require('ejs');
var React = require('react');
var Clock = require('./views/ClockComponent');
var express = require('express');

var app = express();
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static('public'));

app.get('/', function(req, res){
    var component = React.renderToString(React.createElement(Clock));
    res.render('index.html', {
        component: component
    });
});

app.listen(3000);