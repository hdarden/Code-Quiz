// //variables pulled from index.html

var openingPage = document.getElementById("openingPage");
var answers = document.getElementById("answers");
var instructions = document.getElementById("instructions");
var timer = document.getElementById("timer");
var startButton = document.getElementById("button");
var buttonDiv = document.getElementById("buttonDiv");


//questions and answers
var quiz = [{
        question: "In what year was Mickey Mouse first introduced to the public.",
        options: ["1958", "1982", "1930", "1928"],
        correctAnswer: 3,
        userAnswer: null
    },
    {
        question: "What was Micky Mouse's original name?",
        options: ["Steamboat Willie", "Mickah Mouse", "Captain Steve", "Mickey"],
        correctAnswer: 0,
        userAnswer: null

    },
    {
        question: "What is Micky Mouse's girlfriend, Minnie Mouse's full name?",
        options: ["Minnie Mouse", "Minerva Mouse", "Minilla Mouse", "Eminem"],
        correctAnswer: 1,
        userAnswer: null

    },
    {
        question: "What is Mickey Mouse's dog name?",
        options: ["Jupiter", "Comet", "Pluto", "Venus"],
        correctAnswer: 2,
        userAnswer: null
    },
];

// //add event listener "click" to link start button to questions

//Event listener. When click, it's going to start the quiz function
startButton.addEventListener("click", startQuiz);

var index = 0;

//calls timer function, hides start button, and calls the question
function startQuiz() {
  startTimer();
  nextQuestion();

  buttonDiv.style.display = "none";
}


var currentQuizIndex = 0;
function nextQuestion(){
  //takes index of quiz questions
    var currentQuestion = quiz[currentQuizIndex];
    // if there is no current question, then the quiz is over
    if(!currentQuestion){
      //calls end quiz function
      endQuiz();
      //return will end the next question function and return that value.
      return null;
    }

  //answers content is cleared from the page  
  answers.textContent = "";
  //instructions text takes place of new question
  instructions.textContent = currentQuestion.question;

  //add for loop to pull questions and answers from the quiz array
}


function showQuizResults(){
//insert for loop to compare results

//if then statement 

}

var secondsLeft = 30;
var timerInterval;
function startTimer(){
  timerInterval = setInterval(function(){
    secondsLeft--;
    timer.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0){
      endTimer();
    }
  }, 1000);
}



function endTimer(){
//clears timer

}


//calls end timer and shows results
function endQuiz(){
  endTimer();
  showQuizResults();
}