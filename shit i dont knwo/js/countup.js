"use strict";

let hour2 = 0;
let minute2 = 0;
let second2 = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start2();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset4();

function start2() {
  pause();
  cron = setInterval(() => { timer2(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset4() {
  hour2 = 0;
  minute2 = 0;
  second2 = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

function timer2() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second2++;
  }
  if (second2 == 60) {
    second2 = 0;
    minute2++;
  }
  if (minute2 == 60) {
    minute2 = 0;
    hour2++;
  }
  document.getElementById('hour').innerText = returnData(hour2);
  document.getElementById('minute').innerText = returnData(minute2);
  document.getElementById('second').innerText = returnData(second2);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}