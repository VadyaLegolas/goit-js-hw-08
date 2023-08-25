import { common } from '../common';
import trottle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
  submitBtn: document.querySelector('button[type="submit"]'),
};

let formData =
  JSON.parse(localStorage.getItem(common.FEEDBACK_FORM_STATE)) ?? {};

refs.form.addEventListener('input', trottle(onFormInput, 500));
refs.form.addEventListener('submit', onSubmit);

populateFormInput();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(common.FEEDBACK_FORM_STATE, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  if (JSON.parse(localStorage.getItem(common.FEEDBACK_FORM_STATE))
  ) {
    console.log(
      'FormData: ',
      JSON.parse(localStorage.getItem(common.FEEDBACK_FORM_STATE))
    );
  }
  
  e.currentTarget.reset();
  localStorage.removeItem(common.FEEDBACK_FORM_STATE);
  formData = {}
}

function populateFormInput() {
  if (formData.email) {
    refs.email.value = formData.email;
  }
  if (formData.message) {
    refs.message.value = formData.message;
  }
}
