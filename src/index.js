import { format } from 'date-fns';
import currentLocation from './geolocation';
import displayResults from './displayResults';
import displayErrorMessage from './displayErrorMessage';

const api = {
  key: '2055d72a697ed8d59198d6cc43617eec',
  baseurl: 'http://api.openweathermap.org/data/2.5/weather',
};

// nodes

const dateTime = document.getElementById('date-time');
const search = document.querySelector('.search-box');
const tempContainer = document.getElementById('temp');
// const temp = document.getElementById('tempCel');
const icon = document.querySelector('.icon');

// Format Date

const formatDate = () => format(new Date(), 'h:m a — iiii, dd MMM `yy');
dateTime.innerHTML = formatDate();

// get the value

function getResults(query) {
  fetch(`${api.baseurl}?q=${query}&appid=${api.key}`, { mode: 'cors' })
    .then(response => response.json()).then(data => {
      if (query === data.name) {
        displayResults(data);
      } else {
        displayErrorMessage(query);
      }
    });
}

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
