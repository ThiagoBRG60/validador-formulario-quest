const inputs = document.querySelectorAll(".form-info form input");
const button = document.querySelector(".form-info button");
const errorSpans = document.querySelectorAll(".form-info form span");

button.addEventListener("click", validate);

function validate() {
  inputs.forEach((input, index) => {
    if (input.value === "") {
      input.classList.remove("correct");
      input.classList.add("error");
      errorSpans[index].classList.add("error");
    } else {
      input.classList.remove("error");
      input.classList.add("correct");
      errorSpans[index].classList.remove("error");
    }
  });
}