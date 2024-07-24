let displayTimer = document.querySelector(".timerDisplay"); // Corrected selector
let pause = document.getElementById("pauseButton")
let start = document.getElementById("startButton")
let reset = document.getElementById("resetButton")

let msec = 0;
let ssec = 0;
let mins = 0;

let timerId = null;

start.addEventListener('click', ()=>{
    if(timerId !== null){
        clearInterval(timerId)
    }
    timerId = setInterval(startTimer, 10)
})

pause.addEventListener('click', ()=>{
   clearInterval(timerId)
})

reset.addEventListener('click', ()=>{
    clearInterval(timerId);
    displayTimer.innerHTML = `00 : 00 : 00`
 })

function startTimer(){
    msec++
    if(msec == 100){
        msec = 0;
        ssec++;
        if(ssec == 60){
            ssec = 0;
            mins ++;
        }
    }

    let msecString = msec <10 ? `0${msec}` : msec
    let ssecString = ssec <10 ? `0${ssec}` : ssec
    let minsString = mins <10 ? `0${mins}` : mins

    displayTimer.innerHTML = `${minsString} : ${ssecString} : ${msecString}` ;
}
