let timerDisplay = document.querySelector(".time");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let restartBtn = document.getElementById("restart");

let timer; 
let timeLeft = 25* 60;
let isRunning = false;


function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}


function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}


function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        alert("⏰ Time’s up!");
      }
    }, 1000);
  }
}


function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}


function restartTimer() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  updateDisplay();
  isRunning = false;
}


startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
restartBtn.addEventListener("click", restartTimer);


updateDisplay();
