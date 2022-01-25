var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var finalScore = document.getElementById('finalScore');


var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var maxHighScores = 10;
console.log(highScores);
finalScore.innerText = mostRecentScore;


username.addEventListener('keyup',() =>{
   saveScoreBtn.disabled = !username.value;

})

saveHighScore = (e)=> {
    console.log("clicked save");
   e.preventDefault();
   var score = {
       score: mostRecentScore,
       name: username.value
   };
   highScores.push(score);
   

   highScores.sort((a,b) => b.score - a.score);

   highScores.splice(10);

   localStorage.setItem('highScores', JSON.stringify(highScores));
   window.location. assign (href="./highscores.html");

 
};

