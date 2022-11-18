const password = document.querySelector("#password");
const confirms = document.querySelector("#confirm");
const passwordField = document.querySelector(".passwordField");
const error = document.querySelectorAll(".password");

const errorMessage = document.createElement("span");
errorMessage.style.color = "red";
errorMessage.innerText = "* Passwords do not match";
errorMessage.style.fontSize = "14px";

function isMatching() {
  if (password.value !== confirms.value) {
    passwordField.appendChild(errorMessage);
    password.classList.add("error");
    confirms.classList.add("error");
  } else {
    passwordField.removeChild(errorMessage);
    password.classList.remove("error");
    confirms.classList.remove("error");
  }
}

error.forEach((err) => {
  err.addEventListener("change", isMatching);
});
