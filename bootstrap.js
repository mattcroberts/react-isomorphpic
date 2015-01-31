/**
 * Created by Matt on 31/01/2015.
 */
var React = require('react');
var Clock = require('./views/ClockComponent.jsx');

document.addEventListener('DOMContentLoaded', function(){
   React.render(React.createElement(Clock), document.body);
});