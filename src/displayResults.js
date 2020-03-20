const displayResults = weather => {
  const city = document.getElementById('city-name');
  city.innerText = `${weather.name}`;
  const country = document.getElementById('country-name');
  country.innerText = `${weather.sys.country}`;
  const temp1 = document.getElementById('tempCel1');
  temp1.innerHTML = `${Math.round(weather.main.temp - 273.15)}<span>&#8451;</span>`;
  const temp2 = document.getElementById('tempCel2');
  temp2.innerHTML = `${Math.round((weather.main.temp - 273.15) * 1.8 + 32)}<span>&#8457;</span>`;
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