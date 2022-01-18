//Create the quiz data
var quizInput = [
    {

    question:   "Commonly used data types DO NOT include:",
    1:  "strings",
    2:  "booleans",
    3:  "alerts",
    4:  "numbers",
    correct: "ans3",
    //ToDo write an Alert to say Correct or Wrong
    },
    {
    question:   "The condition in an if / else statement is enclosed within _____.",
    1:  "quotes",
    2:  "curly brackets",
    3:  "parenthesis", 
    4:  "square brackets",
    correct: "ans3",
    },
    {
    question:   "Arrays in JavaScript can be used to store _____.",
    1:  "numbers and strings",
    2:  "other arrays",
    3:  "booleans",
    4:  "all of the above",
    correct: "ans4",
    },
    {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    1:  "commas",
    2:  "curly brackets",
    3:  "quotes",
    4:  "parenthesis",
    correct: "ans3",
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    1:  "JavaScript",
    2:  "terminal/bash",
    3:  "for loops",
    4:  "console.log",
    correct: "ans4",
    },

];

//Setup variables from HTML class and id

var quizEl = document.querySelector("#quiz");
var answer = document.querySelector("answer-btn");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var highscore =document.querySelector("#highscore");
var submit = document.querySelector("#submit-btn");
var back = document.querySelector("#backbtn");
var clear = document.querySelector("#clearbtn");
var start = document.querySelector("#start-quizbtn");








