//variables pulled from index.html

var openingPage = document.getElementById("openingPage");
var instructions = document.getElementById("instructions");
var timer = document.getElementById("timer");
var startButton = document.getElementById("button");
var score = secondsLeft--;
var index = 0;

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

//add event listener "click" to link start button to questions

startButton.addEventListener("click", function(setTime) {
var secondsLeft = 60; 

//when start button is clicked, timer starts counting backward from .60
function setTime() {

  console.log("time");
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      
      clearInterval(timerInterval);

      highScorePage();
    }
  }, 1000);
  
}
setTime();
})


startButton.addEventListener("click", startQuiz);
function startQuiz(){
    startQuiz.textContent = " ";
    
  //loop to pull questions and answers from the array.
  for (var i = 0; i , quiz.length; i++){
    var newButton = document.createElement("button");
    newbutton.textContent = quiz[i].options;
    //appendchild
    
      
    }
  }








   /*  openingPage.textContent = "";
    
    var button1 = document.body.createElement("button");
    document.body.appendChild(button1);
    
    var button2 = document.body.createElement("button");
    document.body.appendChild(button2);
    
    var button3 = document.body.creatElement("button");
    document.body.appendChild(button3);
    
    var button4 = document.body.createElement("button");
    document.body.appendChild(button4); */



    /* for (var i = 0; i < questions.length; i++) {
      // Display current question to user and ask OK/Cancel
      var answer = confirm(questions[i].q);

      // Compare answers
      if ((answer === true && questions[i].a === "t") ||
        (answer === false && questions[i].a === "f")) {
        // Increase score
        score++;
        alert("Correct!");
      }
      else {
        alert("Wrong!");
      }
    }

     */


  
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