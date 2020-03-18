const fetchWeatherData = async city => {
  const URL = process.env.API_URL;
  const KEY = process.env.API_KEY;
  const response = await fetch(`${URL}?q=${city}&appid=${KEY}`, { mode: 'cors' });
  const weatherData = response.json();

  return weatherData;
};

export default fetchWeatherData;