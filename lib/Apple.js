const GamePiece = require('./GamePiece');

module.exports = class Apple extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
    this.x = x;
    this.y = y;
    this.height = 29;
    this.width = 29;
    this.color = '#000';
  }
};