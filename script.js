let formElement = document.getElementById("signInForm");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  // format a got data from form
  new FormData(formElement);
});

formElement.addEventListener("formdata", (e) => {
  // Get the form data from the event object
  let data = e.formData;
  for (const value of data.values()) {
    console.log(value);
  }

});