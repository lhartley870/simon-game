let game = {
  score: 0,
  currentGame: [], 
  playerMoves: [], 
  choices: ["button1", "button2", "button3", "button4"],
  turnNumber: 0
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
  showTurns(); 
};

function lightsOn(circ) {
  document.getElementById(circ).classList.add("light");
  setTimeout(() => {
    document.getElementById(circ).classList.remove("light");
  }, 400);
};

function showTurns() {
  game.turnNumber = 0; 
  let turns = setInterval(() => {
    lightsOn(game.currentGame[game.turnNumber]);
    game.turnNumber++;
    if (game.turnNumber >= game.currentGame.length) {
      clearInterval(turns);
    }
  }, 800);
};

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns };