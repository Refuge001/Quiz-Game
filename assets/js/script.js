var totalSeconds = "";
var interval = "";
var secondsDisplay = document.querySelector("#timer");
var startButton = document.querySelector("#start-btn");

function startTimer() {
  interval = "";
  totalSeconds = 75;
  setTime();
  function setTime() {
    var Interval = setInterval(function () {
      totalSeconds--;
      secondsDisplay.textContent = "Timer: " + totalSeconds;

      if (totalSeconds === 0) {
        clearInterval(Interval);
        alert("Your time is up!");
      }

    }, 1000);

  }
}

startButton.addEventListener("click", startTimer);