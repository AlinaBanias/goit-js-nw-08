import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};
 const STORAGE_KEY = 'feedback-form-state';

const feedbackFormData = {};

refs.form.addEventListener('submit' , onFormSubmit);
refs.form.addEventListener('input' , throttle((e => {

 feedbackFormData[e.target.name] = e.target.value;
 localStorage.setItem( STORAGE_KEY, JSON.stringify(feedbackFormData));

 } ), 500));
 

populateTextarea ();

function onFormSubmit(evt) {
evt.preventDefault();

evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
}


function populateTextarea () {
const savedData  = localStorage.getItem(STORAGE_KEY);
const parsedData = JSON.parse(savedData);
if(parsedData) {
    console.log(parsedData);  
}

}