




//Game HTML Section consist of question object and answer arrays - indexed
var score = 0

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

      var questionCounter = 0;
      var availableQuestions = [];
      var wrongPenalty = 10;
      var maxQuestions = 5;

      //Start Quiz 
      
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
              this.currentPosition = 0;
              
            }//return window.location.assign ("/end.html");
        },
      updateStats: function(){
            var scoreEl = document.getElementById('finalScore');
            scoreEl.textContent = `Your final score: ${this.score}`;
        },

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
        }
      };
      
        quiz.start();


  