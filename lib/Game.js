const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.started = false;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [
      new Block(120, 60, 30, 30, 'red', 'black'),
      new Block(90, 60, 30, 30, 'white', 'black'),
      new Block(60, 60, 30, 30, 'white', 'black'),
      new Block(30, 60, 30, 30, 'white', 'black'),
    ];
    
    this.fruit = [
      new Block(Math.floor(Math.random() * 600), Math.floor(Math.random() * 600), 30, 30, 'red', 'green')
    ];
  }

  animate() {
    const { canvas } = this.ctx;

    this.blocks.forEach( block => {

      if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        block.move();
        this.endGame(); 

      } else {
        block.move();
      }
      
      block.draw(this.ctx);
    });
  }

  endGame() {
    this.gameOver = true;
  }

  startGame() {
    this.started = !this.started;
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
    ctx.fillStyle = 'green';
    ctx.fillRect(1, 1, 600, 600);

    ctx.textAlign = "center";
    ctx.fillStyle = 'black';
    ctx.font = '65px vt323';
    ctx.fillText('SNAKE', 300, 265);

  }
  
  drawGameOverScreen(ctx) {
    // const gameLogo = new Image();

    // gameLogo.src = "images/snake.png";
    // ctx.drawImage(gameLogo, 300, 300)

    ctx.fillStyle = '#222';
    ctx.fillRect(1, 1, 600, 600);
  }

};