const displayErrorMessage = (message) => {
  const notification = document.querySelector('.notification');
  notification.style.display = 'block';
  notification.innerHTML = `<p>${message} not found! please enter a valid city</p>`;
};

export default displayErrorMessage;