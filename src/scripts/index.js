// access dynmically to id of each input
// check if there is a value, === ''
// return an error message to ad to the innerhtml of the span,next sibling element of input

// next :
// style it , color icon and border of container when listening to event
// multiply your block to all other sections

const fields = ["first-name", "last-name", "email", "password"];

const form = document.querySelector(".container-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fields.forEach((field) => {
    const input = document.getElementById(`${field}`);

    if (!input.value) {
      input.parentElement.nextElementSibling.innerHTML = `${input.placeholder} cannot be empty`;
    }
  });
});
