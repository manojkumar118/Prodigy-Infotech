let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsContainer = document.getElementById('laps');

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', recordLap);

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 1000);
        isRunning = true;
    }
}

function pause() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    display.textContent = '00:00:00';
    lapsContainer.innerHTML = '';
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

function recordLap() {
    if (isRunning) {
        const lapTime = display.textContent;
        const lapElement = document.createElement('li');
        lapElement.textContent = lapTime;
        lapsContainer.appendChild(lapElement);
    }
}
