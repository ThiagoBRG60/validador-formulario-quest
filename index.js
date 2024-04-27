const inputs = document.querySelectorAll(".form-info form .campo");
const button = document.querySelector(".form-info button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    if (input.value) {
      input.classList.add("correct");
      input.nextElementSibling.classList.remove("error");
    } else {
      input.classList.remove("correct");
      input.classList.add("error");
      input.nextElementSibling.classList.add("error");
    }
  });
});