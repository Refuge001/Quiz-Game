var totalSeconds = "";
var interval = "";
var secondsDisplay = document.querySelector("#timer");
var startButton = document.querySelector("#start-btn");
var submitButton = document.querySelector("#score-btn");
//getElementsByClassName returns an array
var answerButton = document.getElementsByClassName("answer");
var questionEl = document.querySelector("#questions");
var score = [];

var correctAnswer = answerButton[1]; // Still need to figure this out

const questionArr = ["Question 1?", "Question 2?"];
const answerArr = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];


function startTimer() {
  totalSeconds = 75;
  clearInterval(interval);
  setTime();
  function setTime() {
    interval = setInterval(function () {
      totalSeconds--;
      secondsDisplay.textContent = "Timer: " + totalSeconds;
      if (totalSeconds === 0) {
        alert("Your time is up!");
        clearInterval(interval);
      }
    }, 1000);
  }
}

function startQuiz() {
  alert("Quiz Started");
}

function doubleStart() {
  score = [];
  startTimer();
  startQuiz();
  questionEl.textContent = questionArr[0];
}

function submitAnswer() {
  alert("Answer Submitted")
  //i think another loop needed for answers/question replacement
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
