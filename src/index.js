import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import preciseDiff from 'moment-precise-range-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const startOfCovidInMillis = Date.parse("December 31, 2019");


function tick() {
    const secondsAgo = moment(Date.now()).diff(startOfCovidInMillis, "seconds");
    const minutesAgo = moment(Date.now()).diff(startOfCovidInMillis, "minutes");
    const hoursAgo = moment(Date.now()).diff(startOfCovidInMillis, "hours");
    const daysAgo = moment(Date.now()).diff(startOfCovidInMillis, "days");
    const monthsAgo = moment(Date.now()).diff(startOfCovidInMillis, "months");
    const yearsAgo = moment(Date.now()).diff(startOfCovidInMillis, "years");
    
    const timeBetween = moment.preciseDiff(new Date(startOfCovidInMillis), Date.now(), true);
    
    const element = (
      <div>
        <h1>First covid infect was {secondsAgo} seconds ago!</h1>
        <h2>That's about {minutesAgo} minutes or,</h2>
        <h2>{hoursAgo} hours or,</h2>
        <h2>{daysAgo} days or,</h2>
        <h2>{monthsAgo} months or</h2>
        <h2>{yearsAgo} years</h2>
        <h2>That was {timeBetween.years} years {timeBetween.months} months {timeBetween.days} days {timeBetween.hours} hours {timeBetween.minutes} minutes and {timeBetween.seconds} ago!</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
  