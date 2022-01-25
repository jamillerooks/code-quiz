var quizEl = $('#quiz');
var countdownEl = $('#countdown');
var titleEl = $('#title');
var option = $('.option');
var scoreEl = $('#finalScore');
var userName = $('#initials');
var submitBtn = $('.btn');
var formEl =($('form'));
var questionEl = document.querySelector('.title');
var timerEl = document.querySelector("#countdown");
var timeLeft = 60;
var score = 0

//Array of questions for the quiz

var question =  {

    title:      'Commonly used data types DO NOT include:',
    options:    ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
    correctAnswer: 2
    };

var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    options: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
    correctAnswer: 2
  },
  {
    title: 'The condition in an if / else statement is enclosed within _____.',
    options: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
    correctAnswer: 2
  },
  {
    title: 'Arrays in JavaScript can be used to store _____.',
    options: ['1. numbers and strings',  '2. other arrays', '3. booleans',  '4. all of the above'],
    correctAnswer: 3
  },
  {
    title: 'String values must be enclosed within ____ when being assigned to variables.',
    options: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
    correctAnswer: 2
  },
  {
    title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    options: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
    correctAnswer: 3
  }

];

//Hide the Final Score Section when the quiz is opened
 formEl.hide();
 
 //This is the timer for the quiz. Timer starts when you open the quiz.
 function countdown() {
  var timeInterval = setInterval(function () {

    if (timeLeft > 1) {
          timerEl.textContent = timeLeft;
          timeLeft--;

    } else if (timeLeft === 1) {
          timerEl.textContent = timeLeft;
          timeLeft--;
//Timer ends and the final score section appears
    } else {
          timerEl.textContent = '';     
          clearInterval(timeInterval);
          formEl.show();
    }
    //Timer stops when the last question is answered
        if(quiz.currentPosition >= questions.length){
        clearInterval(timeInterval)
    }
  }, 1000);
}
countdown();
 
 //Start Quiz     
 var quiz = {
    start: function() {
        this.currentPosition = 0;   
        this.score = 0;
 //Get questions from array  
    var optionEl = document.querySelectorAll('.option');
        optionEl.forEach((element, index) => {
        element.addEventListener('click', () => {
        this.checkAnswer(index);
    });
    });
        this.updateStats();
        this.showQuestion(questions[this.currentPosition]);
  },
  
    showQuestion: function(q) {
        var questionEl = document.getElementById('title');
            questionEl.textContent = q.title; 

        var optionEl = document.querySelectorAll('.option');
            optionEl.forEach(function(element, index){
            element.textContent = q.options[index];
    });
  },
  //Check answers
    checkAnswer: function(userSelected) {
        var currentQuestion = questions[this.currentPosition];

            if(currentQuestion.correctAnswer == userSelected) {
                this.score++;
                this.showOutcome(true);
      }
            else {
              timeLeft -= 10;
                this.showOutcome(false);
      }
                this.updateStats();
                this.nextQuestion();
                this.showQuestion(questions[this.currentPosition]);
    },
      nextQuestion: function(){
          this.currentPosition++;
                if(this.currentPosition == questions.length) {
                  //Show form once all questions are answered
                  formEl.show();

                  //Post (timer/score) in local storage
                  localStorage.setItem('mostRecentScore', timeLeft);
            }
    },
      updateStats: function(){
        var scoreEl = document.getElementById('finalScore');
            scoreEl.textContent = `Correct Answers: ${this.score}`;
          
    },
  //Display "correct" or "wrong" once a question is answered
      showOutcome: function(isCorrect){
        var outcomeEl = document.getElementById('outcome');
        var outcome = '';

            if(isCorrect) {
            outcome ='Correct';
        }
            else{
        
            outcome = 'Wrong';
        }
            outcomeEl.textContent = outcome;     
    },
    

  };
  
    quiz.start();


    