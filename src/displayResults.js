const displayResults = weather => {
  const city = document.getElementById('city-name');
  city.innerText = `${weather.name}`;
  const country = document.getElementById('country-name');
  country.innerText = `${weather.sys.country}`;
  const temp = document.getElementById('tempCel');
  temp.innerHTML = `${Math.round(weather.main.temp - 273.15)}<span>&#8451;</span>`;
  const weatherInfo = document.querySelector('.description');
  weatherInfo.innerText = `${weather.weather[0].description}`;
  const wind = document.getElementById('wind');
  wind.innerText = `${Math.round(weather.wind.speed)}`;
  const cloud = document.getElementById('cloud');
  cloud.innerText = `${weather.clouds.all}`;
  const humidity = document.getElementById('humidity');
  humidity.innerText = `${weather.main.humidity}`;
};

export default displayResults;