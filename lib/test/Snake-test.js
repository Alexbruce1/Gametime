const { assert } = require('chai');
const Snake = require('../lib/Snake');

describe('Snake', () => {
  let snake;

  beforeEach('Start game', () => {
    snake = new Snake(15, 15, 15, 15, 'red', 'red');
  });

  it('should have default properties', () => {
    let snakeObj = {
      x: 15,
      y: 15,
      height: 15,
      width: 15,
      color: 'red',
      border: 'red'
    };

    assert.deepEqual(snake, snakeObj);
  });

  it.skip('should', () => { });

  it.skip('should', () => { });

  it.skip('should', () => { });

  it.skip('should', () => { });

  it.skip('should', () => { });

  it.skip('should', () => { });

  it.skip('should', () => { });

});