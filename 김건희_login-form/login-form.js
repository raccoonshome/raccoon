const loginForm = document.querySelector(".login-form");
const textId = document.querySelector(".text-id");
const textPw = document.querySelector(".text-pw");
const inputId = document.querySelector("#id");
const inputPw = document.querySelector("#pw");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputId.value === "") {
    console.log("hello");
    textId.classList.add("show");
  }
  if (inputPw.value === "") {
    console.log("hello");
    textPw.classList.add("show");
  }
});

inputId.addEventListener("input", () => {
  if (inputId.value !== "") {
    textId.classList.remove("show");
  }
});
inputPw.addEventListener("input", () => {
  if (inputPw.value !== "") {
    textPw.classList.remove("show");
  }
});
