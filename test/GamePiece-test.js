const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', () => {
  let gamepiece;

  beforeEach(() => {
    gamepiece = new GamePiece(30, 30, 10, 10, 'green');
  });

  it('should take properties', () => {
    assert.deepEqual(gamepiece, {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
      color: 'green',
      dx: 1,
      dy: 0,
      dxv: 2,
      dyv: 2
    });
  });

  it('should collide with a second gamepiece that occupies the same space', () => {
    const gamepiece2 = new GamePiece(30, 30, 10, 10, 'green');

    const colliding = gamepiece.isCollidingWith(gamepiece2);

    assert.isTrue(colliding);
  });

  it('should not collide with a second gamepiece that does not occupy the same space', () => {
    const gamepiece2 = new GamePiece(130, 130, 10, 10, 'green');

    const colliding = gamepiece.isCollidingWith(gamepiece2);

    assert.isFalse(colliding);
  });

  it('should collide with walls', () => {
    const gamepiece2 = new GamePiece(600, 600, 30, 30, 'green');

    const collide = gamepiece2.isCollidingWithWall(600, 600);

    assert.isTrue(collide);
  });

  it('should be able to move', () => {
    gamepiece.move();

    assert.notEqual(gamepiece.x, 30);
  });

  it('should be able to changeDirection', () => {
    const direction = {
      dx: 0,
      dy: 1
    };

    gamepiece.changeDirection(direction);

    assert.equal(gamepiece.dy, 1);
  });
});