import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import preciseDiff from 'moment-precise-range-plugin';
import React from 'react';
const startInMillis = Date.parse("22 Jan 2022 21:30:00 GMT+0100");


class CostumCountDown extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            timeBetween : moment.preciseDiff(new Date(startInMillis), Date.now(), true)
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => 
            this.tick(), 1000
        );
    }

    tick() {
        this.setState({
            timeBetween : moment.preciseDiff(new Date(startInMillis), Date.now(), true)
        })
    };
    
    render() {
        return (
            <div className='grey darken-3 center white-text'>
                    <div className='row' style={{marginBottom: "0px"}}>
                        <div className='col s3'><h2>{this.state.timeBetween.days}</h2></div>
                        <div className='col s3'><h2>{this.state.timeBetween.hours}</h2></div>
                        <div className='col s3'><h2>{this.state.timeBetween.minutes}</h2></div>
                        <div className='col s3'><h2>{this.state.timeBetween.seconds}</h2></div>
                    </div>
                    <div className='row'>
                        <div className='col s3'><h4>Tage</h4></div>
                        <div className='col s3'><h4>Stunden</h4></div>
                        <div className='col s3'><h4>Minuten</h4></div>
                        <div className='col s3'><h4>Sekunden</h4></div>
                    </div>
            </div>
        );
    }
}

export default CostumCountDown;