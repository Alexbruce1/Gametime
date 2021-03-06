const GamePiece = require('./GamePiece');

module.exports = class Block extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    super(x, y, height, width, color);

    this.borderColor = borderColor;
  } 

  draw(ctx) {
    super.draw(ctx);
  }
};