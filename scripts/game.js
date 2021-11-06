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
  addTurn(); 
}

const showScore = () => document.getElementById("score").innerHTML = game.score;

function addTurn() {
  game.playerMoves.length = 0; 
  game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
  // showTurns(); 
};

module.exports = { game, newGame, showScore, addTurn };