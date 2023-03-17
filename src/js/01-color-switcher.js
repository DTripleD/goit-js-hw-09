function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const background = document.querySelector('body');

let intervalID = 0;
let canIClick = true;

startBtn.addEventListener('click', forAddingBgColor);

stopBtn.addEventListener('click', forStopChangingColor);

function forAddingBgColor() {
  if (canIClick) {
    // background.style.backgroundColor = getRandomHexColor();
    const changeBgColor = setInterval(() => {
      background.style.backgroundColor = getRandomHexColor();
    }, 1000);

    intervalID = changeBgColor;
    canIClick = false;
    stopBtn.style.opacity = '0.5';
    startBtn.style.opacity = '1';
  }
}

function forStopChangingColor() {
  clearInterval(intervalID);
  canIClick = true;
  stopBtn.style.opacity = '1';
  startBtn.style.opacity = '0.5';
}
