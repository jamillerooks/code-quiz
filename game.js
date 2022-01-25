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

var score = 0




//Hide the Final Score Section on when the quiz is opened


//Quiz questions as an object and array

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


 //Start Quiz 
 formEl.hide();



 
 function countdown() {
    var timeLeft = 30;
    var timeInterval = setInterval(function () {
// Set the `textContent` of `timerEl` to show the remaining seconds
timeLeft--;
document.getElementById('countdown').innerHTML='00:' + timeLeft;
if (timeLeft < 0){
  clearInterval(timeInterval);
}
    },1000);
  }//error line 76 - how do you clarify wrong answer
  document.getElementById({outcome = 'wrong'}).addEventListener('click', function () {
    sec -= 10;
    document.getElementById('countdown').innerHTML='00:' + timeLeft;
  });
      
  countdown();
 
      
 var quiz = {
    start: function() {
        this.currentPosition = 0;   
        this.score = 0;
   
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
  
    checkAnswer: function(userSelected) {
        var currentQuestion = questions[this.currentPosition];

            if(currentQuestion.correctAnswer == userSelected) {
                this.score++;
                this.showOutcome(true);
      }
            else {
                this.showOutcome(false);
      }
                this.updateStats();
                this.nextQuestion();
                this.showQuestion(questions[this.currentPosition]);
    },
      nextQuestion: function(){
          this.currentPosition++;
                if(this.currentPosition == questions.length) {
                  formEl.show();
                  localStorage.setItem('mostRecentScore', this.score);
    
        }
    },
      updateStats: function(){
        var scoreEl = document.getElementById('finalScore');
            scoreEl.textContent = `Correct Answers: ${this.score}`;
          
    },

      showOutcome: function(isCorrect){
        var outcomeEl = document.getElementById('outcome');
        var outcome = '';

            if(isCorrect) {
            outcome ='Correct';
        }
            else{
            //Need a funtion to decrement time for wrong answer
            outcome = 'Wrong';
        }
            outcomeEl.textContent = outcome;     
    },
    

  };
  
    quiz.start();


    