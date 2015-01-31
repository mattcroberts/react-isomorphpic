/**
 * Created by Matt on 31/01/2015.
 */

var React = require('react');

var Clock = React.createClass({

    tick: function() {
        this.setState({
            date: new Date()
        });
    },

    getInitialState: function(){
        return {
            date: new Date()
        };
    },

    componentDidMount: function() {
        this.interval = setInterval(this.tick, 1000);
    },

    componentWillUnmount: function() {
        clearInterval(this.interval);
    },

    render: function(){

        return <div>
            <h1>React Timer</h1>
            <p>The time is now {this.state.date.toLocaleString()}</p>
        </div>;
    }
});

module.exports = Clock;