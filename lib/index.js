const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const scoreElem = document.getElementById('score');
const livesElem = document.getElementById('lives');
const rankElem = document.getElementById('rank');
const gameOverElem = document.getElementById('game-over');

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {

  if (game.isOver()) {
    console.log('Game Over');

  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.drawBackground(ctx);
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop)
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

function updateGameInfo() {
  scoreElem.innerHTML = `Score: ${}`
  livesElem.innerHTML = `Lives: ${}`
  rankElem.innerHTML = `Rank: ${}`
  if (Game.gameOver) {
    gameOverElem.innerHTML = `GAME OVER`
  }
}
