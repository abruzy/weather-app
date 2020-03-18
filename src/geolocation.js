import displayResults from './displayResults';

const currentLocation = async () => {
  let lat;
  let lon;

  if (navigator.geolocation) {
    await navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      const api = {
        key: '2055d72a697ed8d59198d6cc43617eec',
        baseurl: 'http://api.openweathermap.org/data/2.5/weather',
      };

      fetch(`${api.baseurl}?lat=${lat}&lon=${lon}&appid=${api.key}`, { mode: 'cors' }).then(response => response.json()).then(data => {
        displayResults(data);
      });
    });
  }
};

export default currentLocation;