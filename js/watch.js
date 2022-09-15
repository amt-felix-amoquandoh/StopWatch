const playStopWatch = document.getElementById("startBtn");
const resetStopWatch = document.getElementById("resetBtn");



//variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// leading zero digits
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// times status display variables
let timerStatus = "stopped";
let timerInterval = null;

//stopwatch function

function stopWatch (){
    seconds++
    if (seconds / 60 === 1){
        seconds = 0;
        minutes ++;
        
        if(minutes / 60 === 1){
            minutes = 0;
            hours ++
        }
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    };
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    };
    if(hours < 10){
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    };

    let timeDisplay = document.getElementById("timer").innerText = 
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds; 
} 

// start timer function
function startTimer (){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById("startBtn").innerHTML = ` <ion-icon class="icon" id="pauseBtn" name="pause"></ion-icon>`;
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById("startBtn").innerHTML = ` <ion-icon class="icon"  name="play"></ion-icon>`;
        timerStatus = "stopped";
    }
}


function resetTimer (){
    window.clearInterval(timerInterval);
     seconds = 0;
     minutes = 0;
     hours = 0;
     document.getElementById("timer").innerHTML = "00:00:00"
}



playStopWatch.addEventListener("click", startTimer);
resetStopWatch.addEventListener("click", resetTimer);