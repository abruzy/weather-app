import displayResults from './displayResults';
import displayErrorMessage from './displayErrorMessage';


const getResults = async (query) => {
  const api = {
    key: '2055d72a697ed8d59198d6cc43617eec',
    baseurl: 'http://api.openweathermap.org/data/2.5/weather',
  };

  fetch(`${api.baseurl}?q=${query}&appid=${api.key}`, { mode: 'cors' }).then(response => response.json()).then(data => {
    if (query === data.name) {
      displayResults(data);
    } else {
      displayErrorMessage(query);
    }
  });
};

export default getResults;