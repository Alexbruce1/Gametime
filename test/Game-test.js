const { assert } = require('chai');
const Game = require('../lib/Game');
const Block = require('../lib/Block');
const Apple = require('../lib/Apple');

const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
};

describe('Game', () => {
  let game;

  beforeEach('Start game', () => {
    game = new Game(ctx);
  });

  it('should take properties', () => {
    game.fruit = [new Apple(3, 3, 30, 30, 'magenta', 'green')];

    assert.deepEqual(game, {
      ctx,
      started: false,
      paused: false,
      gameOver: false,
      points: 0,
      lives: 3,
      level: 1,
      snake: [new Block(30, 30, 30, 30, 'red', 'black')],
      fruit: [new Apple (3, 3, 30, 30, 'magenta', 'green')]
    });
  });
  
  it('should eat fruit', () => { 
    game.ateFruit();

    assert.deepEqual(game.points, 10);
  });

  it('should end game', () => { 
    assert.equal(game.gameOver, false);

    game.endGame();

    assert.equal(game.gameOver, true);
  });

  it('should start game', () => {
    let startedValue = game.started;

    game.startGame();

    assert.notDeepEqual(game.started, startedValue);
  });
  
  it('should toggle the pause property', () => { 
    game.paused = false;

    game.togglePause();

    assert.deepEqual(game.paused, true);
  });
});