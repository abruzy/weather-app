import { format } from 'date-fns';
import currentLocation from './geolocation';
import displayResults from './displayResults';

const api = {
  key: '2055d72a697ed8d59198d6cc43617eec',
  baseurl: 'http://api.openweathermap.org/data/2.5/weather',
};

// nodes

const dateTime = document.getElementById('date-time');
const search = document.querySelector('.search-box');

// Format Date

const formatDate = () => format(new Date(), 'h:m a — iiii, dd MMM `yy');
dateTime.innerHTML = formatDate();

// get the value

function getResults(query) {
  fetch(`${api.baseurl}?q=${query}&appid=${api.key}`, { mode: 'cors' })
}

// set query

const setQuery = evt => {
  if (evt.keyCode === 13) {
    getResults(search.value);
  }
};

// event handlers

document.addEventListener('DOMContentLoaded', currentLocation);
search.addEventListener('keypress', setQuery);
