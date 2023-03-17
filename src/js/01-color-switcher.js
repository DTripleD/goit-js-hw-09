
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const background = document.querySelector("body");

let intervalID = 0;
let canIClick = true;

startBtn.addEventListener("click", forAddingBgColor)


stopBtn.addEventListener("click", forStopChangingColor);


function forAddingBgColor(){
    if(canIClick){
        const changeBgColor = setInterval(() => {
            background.style.backgroundColor = getRandomHexColor();
        }, 1000);
    
        intervalID = changeBgColor;
        canIClick = false;
    }
}

function forStopChangingColor(){
    clearInterval(intervalID);
    canIClick = true;
}

