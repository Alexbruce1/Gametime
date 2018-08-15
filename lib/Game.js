const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [
      new Block(15, 15, 15, 15, 'red', 'black')
    ];
  }

  drawBackground(ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(1, 1, 600, 600)
  }

  // draw one frame of our game
  animate() {
    const { canvas } = this.ctx;

    

    this.blocks.forEach( block => {

      if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        // const newDirection = {
        //   dx: block.dx * -1,
        //   dy: block.dy * -1
        // }
        // block.changeDirection(newDirection)
        // block.move();
        this.endGame();  
        // switch directions

      } else {
        block.move();
      }
      
      block.draw(this.ctx);
    })
  }

  endGame() {
    this.gameOver = true;
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

}