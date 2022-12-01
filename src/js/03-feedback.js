import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};
 const STORAGE_KEY = 'feedback-form-state';

const feedbackFormData = {};

refs.form.addEventListener('submit' , onFormSubmit);
refs.textarea.addEventListener('input' , throttle(onTextareaInput , 500));

refs.form.addEventListener('input' , e => {

 feedbackFormData[e.target.name] = e.target.value;
localStorage.setItem( STORAGE_KEY, JSON.stringify(feedbackFormData));
const savedData = localStorage.getItem(STORAGE_KEY, feedbackFormData);
const parsedData = JSON.parse(savedData);
console.log(parsedData);
console.log(feedbackFormData);
   });

populateTextarea ();

function onFormSubmit(evt) {
evt.preventDefault();

evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY , message);
 }

function populateTextarea () {
const savedMessage  = localStorage.getItem(STORAGE_KEY);
if(savedMessage) {
    console.log(savedMessage);
    // savedMessage[e.target.name] = e.target.value;
    
}

}