let timer;
let minute = 4;
let seconds = minute * 60
let textSec = "00"
let textMilsec = "000"
let display = document.getElementById("display")
display.innerHTML = minute + ':00'

function start() {
    let statSec = 60
    cancel()
    timer = setInterval(function() {
        seconds--;
        if (statSec != 0) statSec--
        else statSec = 59
        
        if (statSec < 10) textSec = '0' + statSec
        else textSec = statSec
        
        display.innerHTML = Math.floor(seconds/60) + ':' + textSec

        if (seconds == 0) {
            clearInterval(timer)
        }
    },1000)
}

function stop() {
    clearInterval(timer)
}

function cancel() {
    clearInterval(timer)
    display.innerHTML = minute + ':00'
    seconds = minute * 60
}