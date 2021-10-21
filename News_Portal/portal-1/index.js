//Bulma does not include any JavaScript interaction. You will have to implement the class toggle yourself.

//mobile menu

const burgerIcon = document.querySelector("#burger");
const navMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("is-active");
});

//signup modal

const signUpBtn = document.querySelector("#signup");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");

signUpBtn.addEventListener("click", () => {
  modal.classList.toggle("is-active");
});

//modal background close
modalBg.addEventListener("click", () => {
  modal.classList.remove("is-active");
});
