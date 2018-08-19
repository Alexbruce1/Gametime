const Block = require('./Block');
const Apple = require('./Apple');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.started = false;
    this.paused = false;
    this.gameOver = false;
    this.points = 0;
    this.lives = 3;
    // this.lifeLoss = false;

    this.blocks = [
      new Block(30, 30, 30, 30, 'red', 'black')
    ];

    this.fruit = [
      new Apple(Math.floor(Math.random() * 19), Math.floor(Math.random() * 19), 30, 30, 'magenta', 'green')
    ];
  }

  animate() {
    const { canvas } = this.ctx;

    this.fruit.forEach(block => {
      block.draw(this.ctx);
    });

    this.blocks.forEach( block => {
      if (block.isCollidingWith(this.fruit[0])) {
        this.ateFruit();
      }

      if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        this.lives--;
        block.move();
        if (this.lives === 0) {
          this.endGame(); 
        } else {
          // this.lifeLoss = true;
          this.resetSnake();
        }

      } else {
        block.move();
      }

      block.draw(this.ctx);
      
      if (this.paused) {
        
      }

    });
  }

  ateFruit() {
    this.points += 10;
    this.resetFruit();
    this.resetSnake();
  }

  // resetAfterLifeLoss(ctx) {
  //   ctx.fillStyle = 'green';
  //   ctx.fillRect(1, 1, 600, 600);

  //   ctx.textAlign = "center";
  //   ctx.fillStyle = 'black';
  //   ctx.font = '65px vt323';
  //   ctx.fillText('YOU\'VE LOST A LIFE, 300, 265);

  //   window.setTimeout(function() {
  //     this.lifeLoss = false;
  //   }, 1000)
  // }

  endGame() {
    this.gameOver = true;
  }

  startGame() {
    this.resetSnake();
    this.started = !this.started;
  }

  resetSnake() {
    this.blocks[0] = new Block(30, 30, 30, 30, 'red', 'black');
  }

  resetFruit() {
    this.fruit[0] = new Apple(Math.floor(Math.random() * 19), Math.floor(Math.random() * 19), 30, 30, 'magenta', 'green');
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    this.blocks.forEach( block => block.changeDirection(direction) );
  }

  drawBackground(ctx) {
    let backgroundX = 600;
    let backgroundY = 600;

    ctx.fillStyle = '#1c4a26';
    ctx.fillRect(1, 1, 600, 600);

    for (let x = 0; x <= backgroundX; x += 30) {
      ctx.moveTo(0 + x + 0, 0);
      ctx.lineTo(0 + x + 0, backgroundY + 0);
    }

    for (let y = 0; y <= backgroundY; y += 30) {
      ctx.moveTo(0, 0 + y + 0);
      ctx.lineTo(backgroundY + 0, 0 + y + 0);
    }

    ctx.strokeStyle = "#1e7352";
    ctx.stroke();
  }

  drawStartScreen(ctx) {
    this.points = 0;
    this.lives = 3;

    ctx.fillStyle = '#1e7352';
    ctx.fillRect(1, 1, 600, 600);

    ctx.textAlign = "center";
    ctx.fillStyle = '#dbdddc';
    ctx.font = '65px vt323';
    ctx.fillText('SNAKE', 300, 265);

    ctx.font = '35px vt323';
    ctx.fillText('Press SPACE to begin your game.', 300, 365);

  }
  
  drawGameOverScreen(ctx) {
    this.started = !this.started;
    // const gameLogo = new Image();

    // gameLogo.src = "images/snake.png";
    // ctx.drawImage(gameLogo, 300, 300)

    ctx.fillStyle = '#222';
    ctx.fillRect(1, 1, 600, 600);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#1e7352';
    ctx.font = '75px vt323';
    ctx.fillText('GAME OVER!', 300, 265);

    ctx.fillStyle = '#dbdddc';
    ctx.font = '35px vt323';
    ctx.fillText('Press the Spacebar to reset the game', 300, 570);

  }

};