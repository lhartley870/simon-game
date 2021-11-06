let game = {
  score: 0,
  currentGame: [], 
  playerMoves: [], 
  choices: ["button1", "button2", "button3", "button4"]
}

function newGame() {
  game.score = 0;
  game.currentGame.length = 0; 
  game.playerMoves.length = 0;
  showScore(); 
}

const showScore = () => document.getElementById("score").innerHTML = game.score; 

module.exports = { game, newGame, showScore };