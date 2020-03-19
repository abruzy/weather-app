import { format } from 'date-fns';
import currentLocation from './geolocation';
import getResults from './processWeatherData';

// nodes

const dateTime = document.getElementById('date-time');
const search = document.querySelector('.search-box');
const tempContainer = document.getElementById('temp');
// const temp = document.getElementById('tempCel');
const icon = document.querySelector('.icon');

// Format Date

const formatDate = () => format(new Date(), 'h:m a — iiii, dd MMM `yy');
dateTime.innerHTML = formatDate();

// set query

const setQuery = evt => {
  if (evt.keyCode === 13) {
    getResults(search.value);
    search.value = '';
  }
};

// event handlers

document.addEventListener('DOMContentLoaded', currentLocation);
search.addEventListener('keypress', setQuery);
tempContainer.addEventListener('click', () => {
  if (icon.innerHTML === '&#8451;') {
    icon.innerHTML = '&#8451;';
  } else {
    icon.innerHTML = '&#8457;';
  }
});
