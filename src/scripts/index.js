// to do :

// parent of input :focus outline
// media query

// issue: onClick

// next :
// increase placeholder font
// after submit border of input.parentElement on focus
// refactor the logic of the error message

const fields = ["first-name", "last-name", "email", "password"];

const form = document.querySelector(".container-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fields.forEach((field) => {
    const input = document.getElementById(`${field}`);

    if (!input.value) {
      input.parentElement.style.cssText = "border: 3px solid #ff0000;";
      input.nextElementSibling.style.display = "block";
      input.parentElement.nextElementSibling.innerHTML = `${input.placeholder} cannot be empty`;
    } else if (field === "email") {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(input.value)) {
        input.parentElement.nextElementSibling.innerHTML =
          "Looks like this is not an email";
        input.parentElement.style.cssText = "border: 3px solid #ff0000;";
        input.nextElementSibling.style.display = "block";
        input.style.cssText = "color : red; font-weight : 600";
      }
    }
  });
});

const submit = document.querySelector(".btn-submit");
