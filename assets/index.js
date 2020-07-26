/**
 * 'assets/index.js;
 * 
 * Game art material.
 */
// const PIXEL = { N: null, O: 0, X: 1 };
const N = null, O = 0, X = 1;
const Source = {
  BUBBLE: [{
    position: [0, 83],
    data: [
      [N, N, N, N, N, O, O, O, O, N],
      [N, N, N, N, O, N, N, N, N, O],
      [N, N, N, N, O, N, N, N, N, O],
      [N, N, N, N, N, O, O, O, O, N],
      [N, N, N, N, N, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N],
      [N, N, N, O, O, N, N, N, N, N],
      [N, N, O, N, N, O, N, N, N, N],
      [N, N, N, O, O, N, N, N, N, N],
      [X, X, N, N, N, N, N, N, N, N]
    ]
  }, {
    position: [0, 83],
    data: [
      [N, N, N, N, N, O, O, O, O, N],
      [N, N, N, N, O, N, N, N, N, O],
      [N, N, N, N, O, N, N, N, N, O],
      [N, N, N, N, N, O, O, O, O, N],
      [N, N, N, N, N, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N],
      [N, N, N, X, X, N, N, N, N, N],
      [N, N, X, N, N, X, N, N, N, N],
      [N, N, N, X, X, N, N, N, N, N],
      [X, X, N, N, N, N, N, N, N, N]
    ]
  }, {
    position: [0, 83],
    data: [
      [N, N, N, N, N, X, X, X, X, N],
      [N, N, N, N, X, N, N, N, N, X],
      [N, N, N, N, X, N, N, N, N, X],
      [N, N, N, N, N, X, X, X, X, N],
      [N, N, N, N, N, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N],
      [N, N, N, X, X, N, N, N, N, N],
      [N, N, X, N, N, X, N, N, N, N],
      [N, N, N, X, X, N, N, N, N, N],
      [X, X, N, N, N, N, N, N, N, N]
    ]
  }, {
    position: [0, 83],
    data: [
      [N, N, N, N, N, O, O, O, O, N],
      [N, N, N, N, O, N, N, N, N, O],
      [N, N, N, N, O, N, N, N, N, O],
      [N, N, N, N, N, O, O, O, O, N],
      [N, N, N, N, N, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N],
      [N, N, N, O, O, N, N, N, N, N],
      [N, N, O, N, N, O, N, N, N, N],
      [N, N, N, O, O, N, N, N, N, N],
      [O, O, N, N, N, N, N, N, N, N]
    ]
  }],

  COMPUTER: {
    think: {
      position: [44, 73],
      data: [
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N],
        [N, N, N, X, X, N, N, N, N, N, X, X, N, N, N],
        [N, N, X, N, N, N, N, N, N, N, N, N, X, N, N],
        [N, X, N, N, X, X, N, N, N, X, X, N, N, X, N],
        [N, X, N, X, O, O, X, N, X, O, O, X, N, X, N],
        [X, N, N, X, X, O, X, N, X, X, O, X, N, N, X],
        [X, N, N, X, X, O, X, N, X, X, O, X, N, N, X],
        [X, N, N, X, O, O, X, N, X, O, O, X, N, N, X],
        [X, N, N, N, X, X, N, N, N, X, X, N, N, N, X],
        [X, N, N, N, N, N, N, N, N, N, N, N, N, N, X],
        [X, N, N, N, N, N, N, N, N, N, N, N, N, N, X],
        [N, X, N, N, N, N, N, N, N, N, O, N, N, X, N],
        [N, X, N, N, N, N, N, N, X, X, N, N, N, X, N],
        [N, N, X, N, N, N, N, N, N, N, N, N, X, N, N],
        [N, N, N, X, X, N, N, N, N, N, X, X, N, N, N],
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N]
      ]
    },
    wait: {
      position: [44, 73],
      data: [
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N],
        [N, N, N, X, X, N, N, N, N, N, X, X, N, N, N],
        [N, N, X, N, N, N, N, N, N, N, N, N, X, N, N],
        [N, X, N, N, X, X, N, N, N, X, X, N, N, X, N],
        [N, X, N, X, O, O, X, N, X, O, O, X, N, X, N],
        [X, N, N, X, O, O, X, N, X, O, O, X, N, N, X],
        [X, N, N, X, X, X, X, N, X, X, X, X, N, N, X],
        [X, N, N, X, X, O, X, N, X, X, O, X, N, N, X],
        [X, N, N, N, X, X, N, N, N, X, X, N, N, N, X],
        [X, N, N, N, N, N, N, N, N, N, N, N, N, N, X],
        [X, N, N, N, N, N, N, N, N, N, N, N, N, N, X],
        [N, X, N, N, N, N, N, N, N, N, X, N, N, X, N],
        [N, X, N, N, N, N, N, N, X, X, N, N, N, X, N],
        [N, N, X, N, N, N, N, N, N, N, N, N, X, N, N],
        [N, N, N, X, X, N, N, N, N, N, X, X, N, N, N],
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N]
      ]
    },
    lose: {
      position: [44, 73],
      data: [
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N],
        [N, N, N, X, X, N, N, N, N, N, X, X, N, N, N],
        [N, N, X, N, N, N, N, N, N, N, N, N, X, N, N],
        [N, X, N, N, X, X, N, N, N, X, X, N, N, X, N],
        [N, X, N, X, O, O, X, N, X, O, O, X, N, X, N],
        [X, N, N, X, X, O, X, N, X, X, O, X, N, N, X],
        [X, N, N, X, X, O, X, N, X, X, O, X, N, N, X],
        [X, N, N, X, O, O, X, N, X, O, O, X, N, N, X],
        [X, N, N, N, X, X, N, N, N, X, X, N, N, N, X],
        [X, N, N, N, N, N, N, N, N, N, N, N, N, N, X],
        [X, N, N, N, N, N, N, N, N, N, N, N, N, N, X],
        [N, X, N, N, N, N, N, N, N, N, O, N, N, X, N],
        [N, X, N, N, N, N, N, N, X, X, N, N, N, X, N],
        [N, N, X, N, N, N, N, N, N, N, N, N, X, N, N],
        [N, N, N, X, X, N, N, N, N, N, X, X, N, N, N],
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N]
      ]
    }
  },

  PLAYER: {
    think: [{
      position: [11, 73],
      data: [
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N],
        [N, N, N, X, X, X, X, X, X, O, X, X, N, N, N],
        [N, N, X, X, X, X, X, X, X, X, X, O, X, N, N],
        [N, X, X, X, X, X, X, X, X, X, X, X, O, X, N],
        [N, X, X, X, X, X, X, X, X, X, X, X, O, X, N],
        [X, X, O, X, X, O, X, O, X, X, O, X, X, X, X],
        [X, X, O, X, X, O, X, O, X, X, O, X, X, X, X],
        [X, X, O, O, O, X, X, O, O, O, X, X, X, X, X],
        [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
        [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
        [X, X, X, X, X, X, X, X, X, X, X, O, X, X, X],
        [N, X, X, X, X, X, X, X, X, X, O, X, X, X, N],
        [N, X, X, X, X, X, X, X, O, O, X, X, X, X, N],
        [N, N, X, X, X, X, X, X, X, X, X, X, X, N, N],
        [N, N, N, X, X, X, X, X, X, X, X, X, N, N, N],
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N]
      ]
    }, {
      position: [11, 73],
      data: [
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N],
        [N, N, N, X, X, X, X, X, X, O, X, X, N, N, N],
        [N, N, X, X, X, X, X, X, X, X, X, O, X, N, N],
        [N, X, X, O, O, X, X, X, O, O, X, X, O, X, N],
        [N, X, X, X, O, O, X, X, X, O, O, X, O, X, N],
        [X, X, X, X, O, O, X, X, X, O, O, X, X, X, X],
        [X, X, O, O, O, O, X, O, O, O, O, X, X, X, X],
        [X, X, O, O, O, X, X, O, O, O, X, X, X, X, X],
        [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
        [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
        [X, X, X, X, X, X, X, X, X, X, X, O, X, X, X],
        [N, X, X, X, X, X, X, X, X, X, O, X, X, X, N],
        [N, X, X, X, X, X, X, X, O, O, X, X, X, X, N],
        [N, N, X, X, X, X, X, X, X, X, X, X, X, N, N],
        [N, N, N, X, X, X, X, X, X, X, X, X, N, N, N],
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N]
      ]
    }],
    wait: {
      position: [11, 73],
      data: [
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N],
        [N, N, N, X, X, X, X, X, X, O, X, X, N, N, N],
        [N, N, X, X, X, X, X, X, X, X, X, O, X, N, N],
        [N, X, X, O, O, X, X, X, O, O, X, X, O, X, N],
        [N, X, O, O, O, O, X, O, O, O, O, X, O, X, N],
        [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
        [X, X, O, X, X, O, X, O, X, X, O, X, X, X, X],
        [X, X, O, X, X, O, X, O, X, X, O, X, X, X, X],
        [X, X, X, O, O, X, X, X, O, O, X, X, X, X, X],
        [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
        [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
        [N, X, X, X, X, X, X, X, X, X, O, X, X, X, N],
        [N, X, X, X, X, X, X, X, O, O, X, X, X, X, N],
        [N, N, X, X, X, X, X, X, X, X, X, X, X, N, N],
        [N, N, N, X, X, X, X, X, X, X, X, X, N, N, N],
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N]
      ]
    },
    lose: {
      position: [11, 73],
      data: [
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N],
        [N, N, N, X, X, X, X, X, X, O, X, X, N, N, N],
        [N, N, X, X, X, X, X, X, X, X, X, O, X, N, N],
        [N, X, X, O, O, X, X, X, O, O, X, X, O, X, N],
        [N, X, X, X, O, O, X, X, X, O, O, X, O, X, N],
        [X, X, X, X, O, O, X, X, X, O, O, X, X, X, X],
        [X, X, O, O, O, O, X, O, O, O, O, X, X, X, X],
        [X, X, O, O, O, X, X, O, O, O, X, X, X, X, X],
        [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
        [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
        [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
        [N, X, X, X, X, X, X, X, X, X, X, X, X, X, N],
        [N, X, X, X, X, X, X, X, O, O, X, X, X, X, N],
        [N, N, X, X, X, X, X, X, X, X, X, X, X, N, N],
        [N, N, N, X, X, X, X, X, X, X, X, X, N, N, N],
        [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N]
      ]
    }
  },

  CHECKERBOARD: {
    board: {
      size: 15,
      offset: [4, 4],
      image: {
        position: [0, 4],
        data: [
          [N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N],
          [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
          [X, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X],
          [X, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, N, X, N, N, X, X],
          [X, X, N, N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, N, X, X],
          [X, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X],
          [X, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X],
          [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
          [N, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N]
        ]
      }
    },
    piece: {
      size: 2,
      black: {
        data: [
          [N, X, X, X, N],
          [X, N, X, X, X],
          [X, X, X, X, X],
          [X, X, X, X, X],
          [N, X, X, X, N]
        ]
      },
      white: {
        data: [
          [N, X, X, X, N],
          [X, O, O, O, X],
          [X, O, O, O, X],
          [X, O, O, O, X],
          [N, X, X, X, N]
        ]
      }
    }
  },

  ENDING: [{
    position: [21, 27],
    data: [
      [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, X, X, N, N, N, N, N],
      [N, N, N, X, X, N, N, N, N, N, X, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, X, X, X, N, X, X, N, N, N],
      [N, N, X, N, N, N, N, N, N, N, N, N, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, X, X, X, X, X, X, N, X, N, N],
      [N, X, N, N, X, X, N, N, N, X, X, N, N, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, N, N, X, X, X, N, N, X, X, N, X, N],
      [N, X, N, X, N, N, X, N, X, N, N, X, N, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, N, N, X, X, X, N, N, X, N, X, N],
      [X, N, N, X, N, X, X, N, X, N, X, X, N, N, X, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, X, N, N, X, X, X, N, N, X, X, X, X],
      [X, N, N, X, N, X, X, N, X, N, X, X, N, N, X, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, N, N, N, N, X, N, N, N, N, X, X, X, X],
      [X, N, N, X, N, N, X, N, X, N, N, X, N, N, X, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, N, N, N, X, X, N, N, N, X, X, X, X, X],
      [X, N, N, N, X, X, N, N, N, X, X, N, N, N, X, X, O, O, O, O, O, O, O, O, O, O, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
      [X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, O, X, O, O, X, X, X, O, O, O, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
      [X, N, N, N, N, N, N, N, N, N, N, X, N, N, N, O, O, X, X, O, O, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, X, X, X],
      [N, X, N, N, N, N, N, N, N, N, X, N, N, X, X, O, O, O, O, O, X, X, X, X, X, X, X, O, O, X, X, X, X, X, X, X, X, X, N, X, X, X, N],
      [N, X, N, N, N, N, N, N, X, X, N, N, N, X, O, X, X, O, O, O, X, X, X, X, X, O, O, O, O, X, X, X, X, X, X, X, N, N, X, X, X, X, N],
      [N, N, X, N, N, N, N, N, N, N, N, N, X, O, O, O, O, X, X, X, X, X, X, X, O, O, O, O, O, O, X, X, X, X, X, X, X, X, X, X, X, N, N],
      [N, N, N, X, X, N, N, N, N, N, X, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, X, X, X, X, X, X, N, N, N],
      [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, X, X, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
      [N, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, N, N, N, N, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N],
      [N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, N, N, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X]
    ]
  }, {
    position: [21, 27],
    data: [
      [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, X, X, N, N, N, N, N],
      [N, N, N, X, X, N, N, N, N, N, X, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, X, X, X, N, X, X, N, N, N],
      [N, N, X, N, N, N, N, N, N, N, N, N, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, X, X, X, X, X, X, N, X, N, N],
      [N, X, N, N, X, X, N, N, N, X, X, N, N, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, N, N, X, X, X, N, N, X, X, N, X, N],
      [N, X, N, X, N, N, X, N, X, N, N, X, N, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, N, N, X, X, X, N, N, X, N, X, N],
      [X, N, N, X, N, X, X, N, X, N, X, X, N, N, X, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, X, N, N, X, X, X, N, N, X, X, X, X],
      [X, N, N, X, N, X, X, N, X, N, X, X, N, N, X, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, N, N, N, N, X, N, N, N, N, X, X, X, X],
      [X, N, N, X, N, N, X, N, X, N, N, X, N, N, X, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, N, N, N, X, X, N, N, N, X, X, X, X, X],
      [X, N, N, N, X, X, N, N, N, X, X, N, N, N, X, X, O, O, O, X, X, X, O, O, O, O, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
      [X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, O, X, X, X, O, O, X, X, X, O, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X],
      [X, N, N, N, N, N, N, N, N, N, N, X, N, N, N, O, O, O, O, O, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, N, X, X, X],
      [N, X, N, N, N, N, N, N, N, N, X, N, N, X, X, O, O, O, O, O, X, X, X, X, X, X, X, O, O, X, X, X, X, X, X, X, X, X, N, X, X, X, N],
      [N, X, N, N, N, N, N, N, X, X, N, N, N, X, O, X, X, X, X, X, X, X, X, X, X, O, O, O, O, X, X, X, X, X, X, X, N, N, X, X, X, X, N],
      [N, N, X, N, N, N, N, N, N, N, N, N, X, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, X, X, X, X, X, X, X, X, X, X, X, N, N],
      [N, N, N, X, X, N, N, N, N, N, X, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, X, X, X, X, X, X, N, N, N],
      [N, N, N, N, N, X, X, X, X, X, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, X, X, X, X, X, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
      [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
      [N, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, N, N, N, N, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N],
      [N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, N, N, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X, N, X]
    ]
  }]
}

export default Source;