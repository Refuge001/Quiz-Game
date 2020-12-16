var totalSeconds = "";
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
var score = [];

console.log(answerButton);
var correctAnswer = answerButton[1]; // Still need to figure this out
answerButton[1] = true;
console.log(answerButton[1]);

const questionArr = ["Question 1?", "Question 2?", "Question 3?", "Question 4?", "Question 5?"];
const answerArr0 = ["Q1A1", "Q1A2", "Q1A3", "Q1A4"];
const answerArr1 = ["Q2A1", "Q2A2", "Q2A3", "Q2A4"];
const answerArr2 = ["Q3A1", "Q3A2", "Q3A3", "Q3A4"];
const answerArr3 = ["Q4A1", "Q4A2", "Q4A3", "Q4A4"];
const answerArr4 = ["Q5A1", "Q5A2", "Q5A3", "Q5A4"];


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
  score = [];
  questionCounter = "";
  startTimer();
  startQuiz();
  questionCounter++;
  nextQuestion(); // To do: build function to randomize questions from array and present them here (or wherever they need to go)
}

function submitAnswer() {
  if (answerButton === false) {
    alert("Incorrect!");
    totalSeconds--;
  } else {
    alert("Correct!");
    score++;
  }
  nextQuestion();

  //if-else statement for correct/incorrect answer and question progress
  //i think another loop needed for answers/question replacement after the first set is created @start
}
//loop required to go through answer button Array adding eventListener
for (let i = 0; i < answerButton.length; i++) {
  answerButton[i].addEventListener("click", submitAnswer)
}

function nextQuestion() {
  // have answer buttons appear
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
  //answerEl.textcontent = answerArr[];
}

function finishGame() {
  alert("Game is finished");
}

function submitScore() {
  alert("submit clicked");
}

startButton.addEventListener("click", doubleStart);
submitButton.addEventListener("click", submitScore);

//answerButton.addEventListener("click", answerSubmit);

// function nextQuestion() {
//   if (questionEl.textContent = questionArr[4]) {
//     finishGame();
//     return;
//   }
//   else if (questionEl.textContent = questionArr[3]) {
//     questionEl.textContent = questionArr[4];
//     return;
//   }
//   else if (questionEl.textContent = questionArr[2]) {
//     questionEl.textContent = questionArr[3];
//     return;
//   } else if (questionEl.textContent = questionArr[1]) {
//     questionEl.textContent = questionArr[2];
//     return;
//   } else if (questionEl.textContent = questionArr[0]) {
//     questionEl.textContent = questionArr[1];
//     return;
//   }
//   //answerEl.textcontent = answerArr[];
// }

//Attempt to make buttons appear
// for (let i = 0; i < answerButton.length; i++) {
//   if (answerButton[i].style.display === "none") {
//     answerButton[i].style.display = "block";
//   } else {
//     answerButton[i].style.display = "none";
//   }
// }