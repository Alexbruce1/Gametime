const { assert } = require('chai');
const Block = require('../lib/Block');

describe('Block', () => {
  let block;

  beforeEach('Start game', () => {
    block = new Block(30, 30, 30, 30, 'red', 'red');
  });

  it('should have default properties', () => {
    assert.deepEqual(block, {
      x: 30,
      y: 30,
      height: 30,
      width: 30,
      color: 'red',
      borderColor: 'red',
      dx: 1,
      dxv: 2,
      dy: 0,
      dyv: 2
    });
  });

  it('should draw', () => { 

  });

  it.skip('should', () => { });
});