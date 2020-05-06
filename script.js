//variables pulled from index.html

var title = document.querySelector(".quizTitle");
var instructions = document.getElementById("instructions");
var timer = document.getElementById("timer");

//questions and answers
var quiz = [
  {
    question: "In what year was Mickey Mouse first introduced to the public.",
    options: ["1958", "1982", "1930", "1928"],
    answers: 3,
  },
  {
    question: "What was Micky Mouse's original name?",
    options: ["Steamboat Willie", "Mickah Mouse", "Captain Steve", "Mickey"],
    answers: 0,
    
  },
  {
    question: "What is Micky Mouse's girlfriend, Minnie Mouse's full name?",
    options: ["Minnie Mouse", "Minerva Mouse", "Minilla Mouse", "Eminem"],
    answers: 1,
    
  },
  {
    question: "What is Mickey Mouse's dog name?",
    options: ["Jupiter", "Comet", "Pluto", "Venus"],
    answers: 2,
  },
];


var startButton = document.getElementById("button");
//add event listener "click" to link start button to questions
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", setTime);  


//when start button is clicked, timer starts counting backward from .60
function setTime() {
  console.log("time");
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      //vv stops the timer
      clearInterval(timerInterval);
      //vv call highscore page.
      highScorePage();
    }
  }, 1000);
}



function startQuiz(){
    console.log("started")
    
}

  
function selectAnswer (){

  }








  //highscore page opens when timer finishes or when all questions have been answered
  function highScorePage() {
    title.textContent = "Highscores";
    //local storage
  }

  //when start button is clicked, start page disappears and first set of questions are selected.

  //button needs to be created for each option

  //timer starts when button is clicked

  //function that calls each question 1 by 1

//score, not sure how that is going to track with the timer
var score = 0;

var question = 0;
var options = 0;
var answers = 0;
var optionSelected = [];