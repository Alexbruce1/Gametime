const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const scoreElem = document.getElementById('score');
const livesElem = document.getElementById('lives');
// const rankElem = document.getElementById('rank');
const gameOverElem = document.getElementById('game-over');

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {
  updateGameInfo();

  // if (game.lifeLoss) {
  //   game.resetAfterLifeLoss(ctx);
  // }

  if (game.gameOver) {
    game.drawGameOverScreen(ctx);

  } else if (!game.started) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.drawStartScreen(ctx);
    
  } else if (game.started) {
    game.drawBackground(ctx);
    game.animate();
    // game.animateFruit();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop);
}

document.addEventListener('keyup', function(event) {
  let spaceBar = 32;

  if (event.keyCode === spaceBar && !game.started) {
    game.startGame();
  }
  
  if (event.keyCode === spaceBar && game.started && !game.gameOver) {
    game.togglePause();
  }

  if (event.keyCode === spaceBar && game.gameOver) {
    game.gameOver = false;
    game.startGame();
  }

  if (event.keyCode === spaceBar && game.gameOver) {
    game.drawStartScreen();
  }
});

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

function updateGameInfo() {
  if (!Game.gameOver && game.started) {
    scoreElem.innerHTML = `Score: ${game.points}`;
    livesElem.innerHTML = `Lives: ${game.lives}`;
    // rankElem.innerHTML = `Rank: `;
  } else if (game.gameOver) {
    gameOverElem.innerHTML = `GAME OVER`;
  }
}
