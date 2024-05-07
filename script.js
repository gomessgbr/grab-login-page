let formElement = document.getElementById("signInForm");
const inputEmail = document.getElementById('signEmail');
const labelEmail = document.getElementById('labelSignEmail');
const iconEmail = document.getElementById("imageSignEmail");
const inputPassword = document.getElementById("signPswd");
const labelPassword = document.getElementById('labelSignPassword');
const iconPassword = document.getElementById("imageSignPassword");


formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  // format a got data from form
  new FormData(formElement);
});

inputEmail.addEventListener('invalid',() => {
  labelEmail.style.borderColor = '#FF5757';
  iconEmail.style.fill = '#FF5757 !important';
})

inputPassword.addEventListener('invalid',() => {
  labelPassword.style.borderColor = '#FF5757';
  iconPassword.style.fill = '#FF5757 !important';
})


formElement.addEventListener("formdata", (e) => {
  // Get the form data from the event object
  let data = e.formData;
  for (const value of data.values()) {
    console.log(value);
  }

});