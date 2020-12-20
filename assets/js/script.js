//Document selection
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
var scoreBoard = document.querySelector("#scoreboard");
var answerdisplayline = document.querySelector("#answerdisplayline");
var answerdisplay = document.querySelector("#answerdisplay");
var highScore = document.querySelector("#high-score"); //hidden high score
var formScore = document.querySelector("#forminput"); // hidden form
var inputInit = document.querySelector("#initials"); // hidden text/initials input
var inputScore = document.querySelector("#input-score"); // hidden UL element
var disabledScore = document.querySelector("#disabledTextInput"); //hidden score

//Timer, Q&A, score variables
var questionCounter = 0;
var scoreValue = 0;
var totalSeconds = 75;
var interval = "";

//Q&A Arrays
const questionArr = ["What is Javascript's other name?", "Who first created Javascript?", "How do you source an external script?", "Which is an example of an array?", "Which browser has built-in javascript interpreters?"];
const answerArr0 = ["ECMAScript", "CoffeeScript", "Java", "OBJECTScript"];
const answerArr1 = ["Bill Gates", "Brendan Eich", "Jerry Baldwin", "Loki, god of Mischief"];
const answerArr2 = ["\<script load=\"\"\>", "\<script href=\"\"\>", "\<script src=\"\"\>", "\<script import=\"\"\>"];
const answerArr3 = ["const Arr=\"\";", "const Arr=[];", "var Arr=\"\";", "let Arr=\"\";"];
const answerArr4 = ["Chrome", "IE", "Firefox", "All of the above"];
const correctAnswer1 = answerArr0[0];
const correctAnswer2 = answerArr1[1];
const correctAnswer3 = answerArr2[2];
const correctAnswer4 = answerArr3[1];
const correctAnswer5 = answerArr4[3];

function doubleStart() {
  formScore.classList.add("hide"); // Form div reveal
  highScore.classList.add("hide");
  submitButton.classList.add("hide");
  startButton.classList.add("hide");
  scoreValue = 0;
  scoreBoard.innerHTML = "Score: " + scoreValue;
  secondsDisplay.textContent = "Timer: " + totalSeconds;
  questionCounter = 0;
  totalSeconds = 75;
  questionCounter++;
  startTimer();
  nextQuestion();
}

//Timer
function startTimer() {
  clearInterval(interval);
  setTime();
  function setTime() {
    interval = setInterval(function () {
      totalSeconds--;
      secondsDisplay.textContent = "Timer: " + totalSeconds;
      if (totalSeconds === 0) {
        finishGame();
      }
    }, 1000);
  }
}

//Utilizing question and answer arrays with a counter to keep progression
function nextQuestion() {
  for (let i = 0; i < answerButton.length; i++) {
    answerButton[i].classList.remove("hide");
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
}

//What happens when we click a button (correct/incorrect and associated score increase/time decrease),
//loop goes through documentGetByClass variable and adds event listener
for (let i = 0; i < answerButton.length; i++) {
  answerButton[i].addEventListener("click", submitAnswer);
}
function submitAnswer(event) {
  var buttonText = event.target.innerText;
  if (buttonText === correctAnswer1) {
    setTimeout(answerDisplay, 1000); // after 2 seconds hide answer display function
    answerdisplayline.classList.remove("hide");
    answerdisplay.classList.remove("hide");
    answerdisplay.textContent = "Correct!";
    for (let i = 0; i < answerButton.length; i++) {
      answerButton[i].classList.add("hide");
    }
    scoreValue++;
  } else if (buttonText === correctAnswer2) {
    setTimeout(answerDisplay, 1000);
    answerdisplayline.classList.remove("hide");
    answerdisplay.classList.remove("hide");
    answerdisplay.textContent = "Correct!";
    for (let i = 0; i < answerButton.length; i++) {
      answerButton[i].classList.add("hide");
    }
    scoreValue++;
  }
  else if (buttonText === correctAnswer3) {
    setTimeout(answerDisplay, 1000);
    answerdisplayline.classList.remove("hide");
    answerdisplay.classList.remove("hide");
    answerdisplay.textContent = "Correct!";
    for (let i = 0; i < answerButton.length; i++) {
      answerButton[i].classList.add("hide");
    }
    scoreValue++;
  }
  else if (buttonText === correctAnswer4) {
    setTimeout(answerDisplay, 1000);
    answerdisplayline.classList.remove("hide");
    answerdisplay.classList.remove("hide");
    answerdisplay.textContent = "Correct!";
    for (let i = 0; i < answerButton.length; i++) {
      answerButton[i].classList.add("hide");
    }
    scoreValue++;
  } else if (buttonText === correctAnswer5) {
    setTimeout(answerDisplay, 1000);
    answerdisplayline.classList.remove("hide");
    answerdisplay.classList.remove("hide");
    answerdisplay.textContent = "Correct!";
    for (let i = 0; i < answerButton.length; i++) {
      answerButton[i].classList.add("hide");
    }
    scoreValue++;
  }
  else {
    totalSeconds = totalSeconds - 10; // Where time is subtracted for wrong answers
    setTimeout(answerDisplay, 1000);
    answerdisplayline.classList.remove("hide");
    answerdisplay.classList.remove("hide");
    answerdisplay.textContent = "Incorrect!";
    for (let i = 0; i < answerButton.length; i++) {
      answerButton[i].classList.add("hide");
    }
  }
  scoreBoard.innerText = "Score: " + (scoreValue * 100); //Where score is actually updated
  disabledScore.innerText = "Score: " + (scoreValue * 100); // hidden score value
  if (questionCounter < 6) {
    setTimeout(nextQuestion, 1000);
  }
  else if (questionCounter === 6) {
    clearInterval(interval);
    setTimeout(finishGame, 1000);
  }
}

function answerDisplay() {
  answerdisplayline.classList.add("hide"); //hide <hr />
  answerdisplay.classList.add("hide"); // hide answer div
}
//What happens when game ends (out of time/questions)
function finishGame() {
  questionEl.innerText = "Game Over!";
  formScore.classList.remove("hide"); // Form div reveal
  submitButton.classList.remove("hide"); //Submit Button reveal
  startButton.classList.remove("hide"); // Start button reveal
  highScore.classList.remove("hide"); // //high score reveal
  clearInterval(interval);
  for (let i = 0; i < answerButton.length; i++) {
    answerButton[i].classList.add("hide");
  }
}

function submitScore() {
  var node = document.createElement("LI");
  var t = document.createTextNode(inputInit.textContent + ": " + (scoreValue * 100));
  node.appendChild(t);
  inputScore.appendChild(node);
  submitButton.classList.add("hide");
}
function getInput(e) {
  inputInit.textContent = e.target.value;
}
//loop required to go through answer button Array adding eventListener
startButton.addEventListener("click", doubleStart);
submitButton.addEventListener("click", submitScore);
inputInit.addEventListener("change", getInput);