const displayErrorMessage = () => {
  const notification = document.querySelector('.notification');
  notification.style.display = 'block';
  notification.innerHTML = '<p>City not found! please enter a valid city</p>';
};

export default displayErrorMessage;