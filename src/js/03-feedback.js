import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
fillFormTextarea();
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(e) {
  e.preventDefault();
  const { email, message } = e.currentTarget.elements;
  console.log(e.currentTarget.elements);
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  e.currentTarget.reset();
  console.log(formData);
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
}
function fillFormTextarea() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveMessage) {
    form.email.value = saveMessage.email || "";
    form.message.value = saveMessage.message || "";
  }
}
 
