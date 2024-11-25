const timer = document.getElementById("timer");
let interval;
let seconds = 0;

function startTimer() {
    if (!interval) {
        interval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    timer.innerHTML = "00:00:00";}

function updateTimer() {
    seconds++;
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    timer.innerHTML = `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
    
}

function pad(num) {
    return num.toString().padStart(2, '0');
}
