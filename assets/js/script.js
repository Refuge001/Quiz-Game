var totalSeconds = "";
var interval = "";
var secondsDisplay = document.querySelector("#timer");
var startButton = document.querySelector("#start-btn");
var submitButton = document.querySelector("#score-btn");
//getElementsByClassName returns an array
var answerButton = document.getElementsByClassName("answer");
var score = [];

var correctAnswer = answerButton[1]; //

const questionArr = ["Question 1?", "Question 2?"];
const answerArr = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];


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

function startQuiz() {
  alert("Quiz Started");
}

function doubleStart() {
  score = "";
  startTimer();
  startQuiz();
}

function submitAnswer() {
  alert("Answer Submitted")
};
//loop required to go through answer button Array adding eventListener
for (let i = 0; i < answerButton.length; i++) {
  answerButton[i].addEventListener("click", submitAnswer)
}

function submitScore() {
  alert("submit clicked");
}

startButton.addEventListener("click", doubleStart);
submitButton.addEventListener("click", submitScore);

//answerButton.addEventListener("click", answerSubmit);
