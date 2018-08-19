const Block = require('./Block');

module.exports = class Apple extends Block {
  constructor(x, y, height, width, color, outline) {
    super(x, y, height, width, color);
    this.x = x * 30;
    this.y = y * 30;
    this.height = 30;
    this.width = 30;
    this.color = color;
    this.outline = outline;
  }
};