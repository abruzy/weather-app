import { format } from 'date-fns';
import currentLocation from './geolocation';
import getResults from './processWeatherData';

// nodes

const dateTime = document.getElementById('date-time');
const search = document.querySelector('.search-box');
const temp1 = document.getElementById('tempCel1');
const temp2 = document.getElementById('tempCel2');

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

temp2.style.display = 'none';
document.addEventListener('DOMContentLoaded', currentLocation);
search.addEventListener('keypress', setQuery);

temp1.addEventListener('click', () => {
  temp2.style.display = 'block';
  temp1.style.display = 'none';
});

temp2.addEventListener('click', () => {
  temp1.style.display = 'block';
  temp2.style.display = 'none';
});
