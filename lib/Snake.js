const GamePiece = require('./GamePiece');

module.exports = class Snake extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.points = 0;
    this.lives = 3;
  }
};