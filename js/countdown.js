let timer;
let minute = 4;
let seconds = minute * 60
let textSec = "00"
let display = document.getElementById("display")
display.innerHTML = minute + ':00'
let statSec = 60

function start() {
    if (seconds != 240) stop()
    timer = setInterval(function() {
        seconds--; 
        temp = seconds
        if (statSec != 0) statSec--
        else statSec = 59
        
        if (statSec < 10) textSec = '0' + statSec
        else textSec = statSec
        
        display.innerHTML = Math.floor(seconds/60) + ':' + textSec
        temp2 = statSec
        if (seconds == 0) {
            clearInterval(timer)
        }
    },1000)
}

function stop() {
    clearInterval(timer)
    seconds = temp
    statSec = temp2
}

function cancel() {
    clearInterval(timer)
    display.innerHTML = minute + ':00'
    minute = 4
    seconds = minute * 60
    statSec = 60
}