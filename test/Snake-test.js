const { assert } = require('chai');
const Snake = require('../lib/Snake');

describe('Snake', () => {
  let snake;

  beforeEach('Start game', () => {
    snake = new Snake(30, 30, 30, 30, 'red', 'red');
  });

  it('should have default properties', () => {
    assert.deepEqual(snake, {
      x: 30,
      y: 30,
      height: 30,
      width: 30,
      color: 'red',
      border: 'red',
      blocks: [],
      dx: 1,
      dxv: 2,
      dy: 0,
      dyv: 2
    });
  });

  it.skip('should', () => { });

  it.skip('should', () => { });

  it.skip('should', () => { });

  it.skip('should', () => { });

  it.skip('should', () => { });

  it.skip('should', () => { });

  it.skip('should', () => { });

  it.skip('should', () => { });

});