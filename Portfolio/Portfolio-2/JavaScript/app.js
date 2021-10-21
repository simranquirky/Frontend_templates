const mobileBtn = document.getElementById("mobile_menu_open")
nav = document.querySelector("nav")
mobileBtnExit=document.getElementById("mobile_menu_close");
mobileBtn.addEventListener("click", ()=> {
    nav.classList.add("menu-btn"); });
mobileBtnExit.addEventListener("click",()=>{
    nav.classList.remove("menu-btn");
});