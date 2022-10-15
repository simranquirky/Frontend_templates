let hour = 0;
let min = 0;
let sec = 0;

let timeOut;

let cron = document.getElementById("cronometro");

let iniciarButton = document.getElementById("iniciar").addEventListener("click", () => iniciar());
let pausarButton = document.getElementById("pausar").addEventListener("click", () => pausar());
let zerarButton = document.getElementById("zerar").addEventListener("click", () => zerar());

function zerar() {
  hour = 0;
  min = 0;
  sec = 0;

  cron.innerHTML = "00:00:00";
  clearTimeout(timeOut);

}

function iniciar() {
  updateTime();
  cron.innerHTML = `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
  clock();
}

function clock() {
  timeOut = setTimeout(iniciar, 1000);
}

function updateTime() {
  if (sec + 1 == 60) {
    if (min + 1 == 60) {
      hour++;
      min = 0;
    }
    else {
      min++;
    }
    sec = 0;
  }
  else {
    sec++;
  }
}

function pausar() {
  clearTimeout(timeOut);
}