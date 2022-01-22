import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import preciseDiff from 'moment-precise-range-plugin';
import React from 'react';


const startOfCovidInMillis = Date.parse("December 31, 2019");


class CovidStopClock extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            secondsAgo : moment(Date.now()).diff(startOfCovidInMillis, "seconds"),
            minutesAgo : moment(Date.now()).diff(startOfCovidInMillis, "minutes"),
            hoursAgo : moment(Date.now()).diff(startOfCovidInMillis, "hours"),
            daysAgo : moment(Date.now()).diff(startOfCovidInMillis, "days"),
            timeBetween : moment.preciseDiff(new Date(startOfCovidInMillis), Date.now(), true)
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => 
            this.tick(), 1000
        );
    }

    tick() {
        this.setState({
            secondsAgo : moment(Date.now()).diff(startOfCovidInMillis, "seconds"),
            minutesAgo : moment(Date.now()).diff(startOfCovidInMillis, "minutes"),
            hoursAgo : moment(Date.now()).diff(startOfCovidInMillis, "hours"),
            daysAgo : moment(Date.now()).diff(startOfCovidInMillis, "days"),
            timeBetween : moment.preciseDiff(new Date(startOfCovidInMillis), Date.now(), true)
        })
    };
    
    
    render() {
        return (
            <div>
                <h1>First covid infection was {this.state.secondsAgo} seconds ago!</h1>
                <h2>That's about {this.state.minutesAgo} minutes or,</h2>
                <h2>{this.state.hoursAgo} hours or,</h2>
                <h2>{this.state.daysAgo} days ago</h2>
                <h2>It was exactly {this.state.timeBetween.years} years {this.state.timeBetween.months} months {this.state.timeBetween.days} days {this.state.timeBetween.hours} hours {this.state.timeBetween.minutes} minutes and {this.state.timeBetween.seconds} ago!</h2>
            </div>
        );
    }
}

export default CovidStopClock;