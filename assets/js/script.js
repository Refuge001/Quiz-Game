var totalSeconds = 0;
var interval = "";
var secondsDisplay = document.querySelector("#timer");
var startButton = document.querySelector("#start-btn");
var submitButton = document.querySelector("#score-btn");
//getElementsByClassName returns an array
var answerButton = document.getElementsByClassName("answer");
var choice1 = document.querySelector("#choice-1");
var choice2 = document.querySelector("#choice-2");
var choice3 = document.querySelector("#choice-3");
var choice4 = document.querySelector("#choice-4");
var questionEl = document.querySelector("#questions");
var questionCounter = "";
var scoreBoard = document.querySelector("#scoreboard");
var scoreValue = 0;

const questionArr = ["What is Javascript's other name?", "Who first created Javascript?", "How do you source an external script?", "Which is an example of an array?", "Which browser has built-in javascript interpreters?"];
const answerArr0 = ["ECMAScript", "CoffeeScript", "Java", "OBJECTScript"];
const answerArr1 = ["Bill Gates", "Brendan Eich", "Jerry Baldwin", "Loki, god of Mischief"];
const answerArr2 = ["\<script load=\"\"\>", "\<script href=\"\"\>", "\<script src=\"\"\>", "\<script import=\"\"\>"];
const answerArr3 = ["const Arr=\"\";", "const Arr=[];", "var Arr=\"\";", "let Arr=\"\";"];
const answerArr4 = ["Chrome", "IE", "Firefox", "All of the above"];

var correctAnswer1 = answerArr0[0];
var correctAnswer2 = answerArr1[1];
var correctAnswer3 = answerArr2[2];
var correctAnswer4 = answerArr3[1];
var correctAnswer5 = answerArr4[3];

function startTimer() {
  totalSeconds = 75;
  clearInterval(interval);
  setTime();
  function setTime() {
    interval = setInterval(function () {
      totalSeconds--;
      secondsDisplay.textContent = "Timer: " + totalSeconds;
      if (totalSeconds === 0) {
        finishGame();
        clearInterval(interval);
      }
    }, 1000);
  }
}

function startQuiz() {
  alert("Quiz Started");
}

function doubleStart() {
  scoreBoard.innerHTML = "Score: " + scoreValue;
  scoreValue = 0;
  questionCounter = 0;
  startTimer();
  startQuiz();
  questionCounter++;
  nextQuestion(); // Wishful thinking#1: build function to randomize questions from array and present them here (or wherever they need to go)
}

function submitAnswer(event) {
  var buttonText = event.target.innerText;
  if (buttonText === correctAnswer1) {
    alert("Correct!");
    scoreValue++;
    console.log(scoreValue);
  } else if (buttonText === correctAnswer2) {
    alert("Correct!");
    scoreValue++;
    console.log(scoreValue);
  }
  else if (buttonText === correctAnswer3) {
    alert("Correct!");
    scoreValue++;
    console.log(scoreValue);
  }
  else if (buttonText === correctAnswer4) {
    alert("Correct!");
    scoreValue++;
    console.log(scoreValue);
  } else if (buttonText === correctAnswer5) {
    alert("Correct!");
    scoreValue++;
    console.log(scoreValue);
  }
  else {
    alert("Incorrect!");
    totalSeconds--;
  }
  nextQuestion();
}

//loop required to go through answer button Array adding eventListener
for (let i = 0; i < answerButton.length; i++) {
  answerButton[i].addEventListener("click", submitAnswer)
}

function nextQuestion() {
  for (let i = 0; i < answerButton.length; i++) {
    answerButton[i].classList.remove("hide")
  }
  if (questionCounter === 1) {
    questionEl.innerText = questionArr[0];
    choice1.innerText = answerArr0[0];
    choice2.innerText = answerArr0[1];
    choice3.innerText = answerArr0[2];
    choice4.innerText = answerArr0[3];
    questionCounter++;
  } else if (questionCounter === 2) {
    questionEl.innerText = questionArr[1];
    choice1.innerText = answerArr1[0];
    choice2.innerText = answerArr1[1];
    choice3.innerText = answerArr1[2];
    choice4.innerText = answerArr1[3];
    questionCounter++;
  } else if (questionCounter === 3) {
    questionEl.innerText = questionArr[2];
    choice1.innerText = answerArr2[0];
    choice2.innerText = answerArr2[1];
    choice3.innerText = answerArr2[2];
    choice4.innerText = answerArr2[3];
    questionCounter++;
  } else if (questionCounter === 4) {
    questionEl.innerText = questionArr[3];
    choice1.innerText = answerArr3[0];
    choice2.innerText = answerArr3[1];
    choice3.innerText = answerArr3[2];
    choice4.innerText = answerArr3[3];
    questionCounter++;
  } else if (questionCounter === 5) {
    questionEl.innerText = questionArr[4];
    choice1.innerText = answerArr4[0];
    choice2.innerText = answerArr4[1];
    choice3.innerText = answerArr4[2];
    choice4.innerText = answerArr4[3];
    questionCounter++;
  }
  else if (questionCounter === 6) {
    finishGame();
  }
}

function finishGame() {
  alert("Game is finished! " + totalSeconds + " seconds left remaining!");
  clearInterval(interval);
  for (let i = 0; i < answerButton.length; i++) {
    answerButton[i].classList.add("hide")
  }
}

function submitScore() {
  alert("submit clicked");
}

startButton.addEventListener("click", doubleStart);
submitButton.addEventListener("click", submitScore); 