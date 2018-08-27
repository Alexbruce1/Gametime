const GamePiece = require('./GamePiece');
const Game = require('./Game');

module.exports = class Snake extends GamePiece {
  constructor(x, y, height, width, color, ) {
    super(x, y, height, width, color);
    this.x = x;
    this.y = y;
    this.height = 30;
    this.width = 30;
    this.color = color;
    this.border = null;
    this.blocks = [];
    this.head = null;
    this.tail = this.blocks[0];
    this.pieces = new GamePiece(30, 30, 30, 30, 'pink');
  }
};