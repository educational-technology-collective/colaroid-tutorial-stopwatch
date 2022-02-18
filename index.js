const timeDisplay = document.getElementById("time-display");
const startButton = document.getElementById("start-button");

let lastTime;
let clock = 0;
let countInterval;

function render() {
    timeDisplay.textContent = Math.round(clock / 1000);
}
function updateClock() {
    clock = new Date().getTime() - lastTime;
    render();
}
startButton.addEventListener("click", () => {
    lastTime = new Date().getTime();
    countInterval = setInterval(updateClock, 1000);
    startButton.setAttribute("disabled", "true");
});