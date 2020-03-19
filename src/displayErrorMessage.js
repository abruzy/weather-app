const displayErrorMessage = () => {
  const notification = document.querySelector('.notification');
  notification.style.display = 'block';
  notification.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
};

export default displayErrorMessage;