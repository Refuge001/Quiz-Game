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
var inputScore = document.querySelector("#input-score"); // hidden OL element
var disabledScore = document.querySelector("#disabledTextInput"); //hidden score
//Timer, Q&A, score variables
var questionCounter = 0;
var scoreValue = 0;
var totalSeconds = 75;
var interval = "";

//Q&A Arrays
const questionArr = ["What is Javascript's other name?", "Who first created Javascript?", "How do you source an external script?", "Which is an example of an array?", "Which browser has a built-in javascript interpreter?"];
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
// What to do on start
function doubleStart() {
  formScore.classList.add("hide"); // Form div hide
  highScore.classList.add("hide"); // highScore div hide
  submitButton.classList.add("hide"); // submitButton hide
  startButton.classList.add("hide"); // startButton hide
  scoreValue = 0;
  totalSeconds = 75;
  scoreBoard.innerHTML = "Score: " + scoreValue;
  secondsDisplay.textContent = "Timer: " + totalSeconds;
  questionCounter = 0;
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
    questionEl.textContent = questionArr[0];
    choice1.textContent = answerArr0[0];
    choice2.textContent = answerArr0[1];
    choice3.textContent = answerArr0[2];
    choice4.textContent = answerArr0[3];
    questionCounter++;
  } else if (questionCounter === 2) {
    questionEl.textContent = questionArr[1];
    choice1.textContent = answerArr1[0];
    choice2.textContent = answerArr1[1];
    choice3.textContent = answerArr1[2];
    choice4.textContent = answerArr1[3];
    questionCounter++;
  } else if (questionCounter === 3) {
    questionEl.textContent = questionArr[2];
    choice1.textContent = answerArr2[0];
    choice2.textContent = answerArr2[1];
    choice3.textContent = answerArr2[2];
    choice4.textContent = answerArr2[3];
    questionCounter++;
  } else if (questionCounter === 4) {
    questionEl.textContent = questionArr[3];
    choice1.textContent = answerArr3[0];
    choice2.textContent = answerArr3[1];
    choice3.textContent = answerArr3[2];
    choice4.textContent = answerArr3[3];
    questionCounter++;
  } else if (questionCounter === 5) {
    questionEl.textContent = questionArr[4];
    choice1.textContent = answerArr4[0];
    choice2.textContent = answerArr4[1];
    choice3.textContent = answerArr4[2];
    choice4.textContent = answerArr4[3];
    questionCounter++;
  }
}

//What happens when we click a button (correct/incorrect and associated score increase/time decrease),
//loop goes through documentGetByClass variable and adds event listener
for (let i = 0; i < answerButton.length; i++) {
  answerButton[i].addEventListener("click", submitAnswer);
}
function submitAnswer(event) {
  var buttonText = event.target.textContent;
  if (buttonText === correctAnswer1) {
    setTimeout(answerDisplay, 1000); // after 2 seconds hide answer display function
    answerdisplayline.classList.remove("hide");
    answerdisplay.classList.remove("hide");
    answerdisplay.textContent = "Correct!";
    //loop goes through all buttons and hides them
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
  } else if (buttonText === correctAnswer3) {
    setTimeout(answerDisplay, 1000);
    answerdisplayline.classList.remove("hide");
    answerdisplay.classList.remove("hide");
    answerdisplay.textContent = "Correct!";
    for (let i = 0; i < answerButton.length; i++) {
      answerButton[i].classList.add("hide");
    }
    scoreValue++;
  } else if (buttonText === correctAnswer4) {
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
  } else {
    totalSeconds = totalSeconds - 10; // Where time is subtracted for wrong answers
    setTimeout(answerDisplay, 1000);
    answerdisplayline.classList.remove("hide");
    answerdisplay.classList.remove("hide");
    answerdisplay.textContent = "Incorrect!";
    for (let i = 0; i < answerButton.length; i++) {
      answerButton[i].classList.add("hide");
    }
  }
  scoreBoard.textContent = "Score: " + (scoreValue * 100); //Where scoreboard is updated
  disabledScore.textContent = "Score: " + (scoreValue * 100); // Hidden score value for Submit Score
  //Conditionals for game progression
  if (questionCounter < 6) {
    setTimeout(nextQuestion, 1000);
  }
  else if (questionCounter === 6) {
    clearInterval(interval);
    setTimeout(finishGame, 1000);
  }
}

//Hides answer div
function answerDisplay() {
  answerdisplayline.classList.add("hide"); //hide <hr />
  answerdisplay.classList.add("hide"); // hide answer div
}
//What happens when game ends (out of time/questions)
function finishGame() {
  questionEl.textContent = "Game Over!";
  formScore.classList.remove("hide"); // Form div reveal
  submitButton.classList.remove("hide"); //Submit Button reveal
  startButton.classList.remove("hide"); // Start button reveal
  highScore.classList.remove("hide"); //high score reveal
  clearInterval(interval); // stops timer from counting down
  for (let i = 0; i < answerButton.length; i++) {
    answerButton[i].classList.add("hide");
  }
}

//What happens when Submit Score button is clicked
function submitScore() {
  var node = document.createElement("LI");
  var t = document.createTextNode((scoreValue * 100) + " - " + inputInit.textContent);
  node.appendChild(t);
  inputScore.appendChild(node);
  submitButton.classList.add("hide");
  sortScore();
}
//When something changes in form, grabs value
function getInput(e) {
  inputInit.textContent = e.target.value;
}

//referenced https://www.w3schools.com/howto/howto_js_sort_list.asp to make while loop/sort list - final stretch goal.
function sortScore() {
  var loop = true;
  while (loop) {
    loop = false;
    var scoreArr = inputScore.getElementsByTagName("LI");
    for (let i = 0; i < (scoreArr.length - 1); i++) {
      if (String(scoreArr[i].innerHTML) < String(scoreArr[i + 1].innerHTML)) {
        scoreArr[i].parentNode.insertBefore(scoreArr[i + 1], scoreArr[i]);
        loop = true;
      }
    }
  }
}

//Event listeners for Start Button, Submit Score, and Form
startButton.addEventListener("click", doubleStart);
submitButton.addEventListener("click", submitScore);
inputInit.addEventListener("change", getInput);