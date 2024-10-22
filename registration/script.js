const dateText = document.querySelector('.dob');
dateText.addEventListener('focus', () => {
  dateText.type = 'date';
});
dateText.addEventListener('blur', () => {
  if (!dateText.value) {
    dateText.type = 'text';
    dateText.placeholder = 'MM/DD/YYYY';
  }
});