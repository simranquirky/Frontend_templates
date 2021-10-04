const themeIconLight = document.querySelector(".theme-toggle-light");
const themeIconDark = document.querySelector(".theme-toggle-dark");
const text = document.querySelectorAll(".text");

themeIconLight.addEventListener("click", () => {
  document.body.classList.add("body-dark");
  text.forEach((txt) => txt.classList.add("text-dark"));
  themeIconLight.classList.add("d-none");
  themeIconDark.classList.remove("d-none");
});

themeIconDark.addEventListener("click", () => {
  document.body.classList.remove("body-dark");
  text.forEach((txt) => txt.classList.remove("text-dark"));
  themeIconLight.classList.remove("d-none");
  themeIconDark.classList.add("d-none");
});

console.log("Hello");
