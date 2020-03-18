const processWeatherData = (() => {
  const convertToCelcius = async fahrenheit => {
    const celcius = await parseFloat(fahrenheit - 273.15).toFixed(2);

    return celcius;
  };

  const convertToFahrenheit = async celcius => {
    const fahrenheit = await parseFloat(celcius * (9 / 5) - 459.67).toFixed(2);

    return fahrenheit;
  };

  const celciusFormatter = async celcius => {
    const format = await `${celcius} \xB0C`;

    return format;
  };

  const fahrenheitFormatter = async fahrenheit => {
    const format = await `${fahrenheit} \xB0F`;

    return format;
  };

  const getRelevantData = weatherData => {
    if (weatherData === null || weatherData.message === 'city not found') {
      return null;
    }
    return {
      city: weatherData.name,
      country: weatherData.sys.country,
      icon: weatherData.weather[0].icon,
      currentTemp: weatherData.main.temp,
      maxTemp: weatherData.main.temp_max,
      minTemp: weatherData.main.temp_min,
      feelsLike: weatherData.main.feels_like,
      condition: weatherData.weather[0].main,
    };
  };

  return {
    convertToCelcius,
    convertToFahrenheit,
    celciusFormatter,
    fahrenheitFormatter,
    getRelevantData,
  };
})();

export default processWeatherData;