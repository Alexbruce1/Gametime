const GamePiece = require('./GamePiece');

module.exports = class Snake extends GamePiece {
  constructor(x, y, height, width, color, border) {
    super(x, y, height, width, color);
    this.x = x;
    this.y = y;
    this.height = 30;
    this.width = 30;
    this.color = color;
    this.border = border;
    this.blocks = [];
  }

  moveSnake() {
    
  }
};