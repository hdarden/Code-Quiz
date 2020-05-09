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


// Event listener. When click, starts quiz function
startButton.addEventListener("click", startQuiz);


var index = 0;

// starts the timer, get the next question, hiding the button display
function startQuiz() {
    console.log("starting quiz");
    startTimer();
    nextQuestion();
    //clears start button display
    buttonDiv.style.display = "none"
}


//when start button is clicked, timer starts counting backward from .30
var secondsLeft = 5;
var timerInterval;
function startTimer() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Timer: " + secondsLeft;
//when timer ends is calls end timer and show quiz results
        if (secondsLeft === 0) {
            endTimer();
            showQuizResults();
        }
    }, 1000);
}

var currentQuizIndex = 0;
function nextQuestion(){

    // index of the quiz questions
    var currentQuestion = quiz[currentQuizIndex];

    // If there is no current question, then the quiz is over
    if(!currentQuestion){
      endQuiz();
      // return will end the function.
      return null;
    }
    // Clear the answers
    answers.textContent = "";
    // Set the instruction to match the new question
    instructions.textContent = currentQuestion.question;

    //loop to pull questions and answers from the array.
    for (var i = 0; i < currentQuestion.options.length; i++) {
        var choice = currentQuestion.options[i];
        var newButton = document.createElement("button");
        newButton.textContent = choice;
        //setting a data attribute to store information
        newButton.setAttribute("data-index", i); 
       
        // Event listener on the newbutton
        newButton.addEventListener('click', function(event) {
            // All events are passed into the function in event listener. The target is the element where the event occurred
            var target = event.target;
            //The element is also the same element that we wrote the data-index to. So we can recall that stored value, and use it now
            var index = target.getAttribute("data-index");
            // ParseInt takes a string and turns it into a integer
            quiz[currentQuizIndex].userAnswer = parseInt(index);
            currentQuizIndex++;
            //Calls this same function again
            nextQuestion();
        })
        //append the newButton into the answers field
        answers.appendChild(newButton);
    }
}

// called when timer ends or last question
function showQuizResults(){
  var correctAnswers = 0;

  for(var x = 0; x < quiz.length; x++){

    // compares correct and user answers
    if(quiz[x].correctAnswer == quiz[x].userAnswer ){
      // increment correct answers
      correctAnswers++;

    }
  }
  // display the results
  instructions.textContent = "Results: You got " + correctAnswers + " out of " + quiz.length + "correct.";

  // clear answer content
  var input = document.createElement("input");
  answers.textContent = "";
  answers.appendChild(input);


}


//Ends the timer, shows results
function endQuiz(){
  endTimer();
  showQuizResults();
 
}
//ends timer, keeps it from tracking negative numbers
function endTimer(){
  clearInterval(timerInterval);
}

