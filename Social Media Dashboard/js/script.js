const themeIconLight = document.querySelector(".theme-toggle-light");
const themeIconDark = document.querySelector(".theme-toggle-dark");
const text = document.querySelectorAll(".text");
const dataBox = document.querySelectorAll(".data");
const dataTodayBox = document.querySelectorAll(".today-data");

themeIconLight.addEventListener("click", () => {
  document.body.classList.add("body-dark");
  text.forEach((txt) => txt.classList.add("text-dark"));
  dataBox.forEach((dt) => dt.classList.add("data-bg"));
  dataTodayBox.forEach((dta) => {
    dta.classList.add("data-bg");
  });
  themeIconLight.classList.add("d-none");
  themeIconDark.classList.remove("d-none");
});

themeIconDark.addEventListener("click", () => {
  document.body.classList.remove("body-dark");
  text.forEach((txt) => txt.classList.remove("text-dark"));
  dataBox.forEach((dt) => dt.classList.remove("data-bg"));
  dataTodayBox.forEach((dta) => dta.classList.remove("data-bg"));
  themeIconLight.classList.remove("d-none");
  themeIconDark.classList.add("d-none");
});
