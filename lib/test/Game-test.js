const { assert } = require('chai');
const Game = require('../lib/Game');
// const Block = require('../lib/Block');
// const Apple = require('../lib/Apple');

describe('Game', () => {
  let game;

  beforeEach('Start game', () => {
    game = new Game()
  });

  it('should have default properties', () => {
    const expectedProperties = {
      ctx: ctx,
      started: false,
      paused: false,
      gameOver: false,
      points: 0,
      lives: 3
    };

    assert.deepEqual(game, expectedProperties);
  });

  it.skip('should', () => {

  });
  
  it.skip('should', () => {

  });
  
  it.skip('should', () => {

  });
  
  it.skip('should', () => {

  });
  
  it.skip('should', () => {

  });
  
  it.skip('should', () => {

  });

  it.skip('should', () => {

  });

});