const GamePiece = require('./GamePiece');

module.exports = class Snake extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
    this.x = x;
    this.y = y;
    this.height = 30;
    this.width = 30;
    this.color = '#000';
    this.blocks = [];
    this.points = 0;
    this.lives = 3;
  }
};