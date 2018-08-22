const { assert } = require('chai');
const Apple = require('../lib/Apple');

describe('Apple', () => {
  let apple;

  beforeEach('Start game', () => {
    apple = new Apple(1, 1, 30, 30, 'red');
  });

  it('should have default properties', () => {
    assert.deepEqual(apple, {
      x: 30,
      y: 30,
      height: 30,
      width: 30,
      color: 'red',
      dx: 1,
      dxv: 2,
      dy: 0,
      dyv: 2,
      borderColor: undefined
    });
  });


  it.skip('should', () => { });
});
