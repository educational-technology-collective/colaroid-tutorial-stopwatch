const timeDisplay = document.getElementById("time-display");

let clock = 0;

function render() {
    timeDisplay.textContent = Math.round(clock / 1000);
}
function updateClock() {
    clock = new Date().getTime();
    render();
}
const countInterval = setInterval(updateClock, 1000);