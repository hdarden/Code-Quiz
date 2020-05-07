//variables pulled from index.html

var openingPage = document.getElementById("openingPage");
var instructions = document.getElementById("instructions");
var timer = document.getElementById("timer");
var startButton = document.getElementById("button");



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
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);

      
    }
  }, 1000);
  
}
setTime();
startQuiz();
})

var index = 0;

function startQuiz(){
    
    var currentQuestion = quiz[index];
    openingPage.textContent = currentQuestion.question;
  //loop to pull questions and answers from the array.
  for (var i = 0; i , currentQuestion.options.length; i++){
    var choice = currentQuestion.options[i];
    var newButton = document.createElement("button");
    newButton.textContent = options;
    instructions.appendChild(newButton);


    }
  }



  
  