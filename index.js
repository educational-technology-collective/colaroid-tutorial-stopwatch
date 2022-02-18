const timeDisplay = document.getElementById("time-display");
const loadTime = (new Date()).getTime();

let clock = 0;

function render() {
    timeDisplay.textContent = Math.round(clock / 1000);
}
function updateClock() {
    clock = new Date().getTime() - loadTime;
    render();
}
const countInterval = setInterval(updateClock, 1000);