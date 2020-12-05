import displayResults from './displayResults';
import displayErrorMessage from './displayErrorMessage';

const currentLocation = async () => {
  const getWeather = async (lat, long) => {
    const api = {
      key: '2055d72a697ed8d59198d6cc43617eec',
      baseurl: 'http://api.openweathermap.org/data/2.5/weather',
    };

    fetch(`${api.baseurl}?lat=${lat}&lon=${long}&appid=${api.key}`, { mode: 'cors' }).then(response => response.json()).then(data => {
      displayResults(data);
    });
  };

  const setPosition = async (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    getWeather(lat, long);
  };

  const showError = async (error) => {
    const notification = document.querySelector('.notification');
    notification.style.display = 'block';
    notification.innerHTML = `<p>${error.message}</p>`;
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
  } else {
    displayErrorMessage();
  }
};

export default currentLocation;