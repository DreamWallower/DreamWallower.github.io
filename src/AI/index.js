/**
 * 'src/AI/index.js'
 * 
 * Game AI.
 */
const MIN_VALUE = Number.NEGATIVE_INFINITY;
const MAX_VALUE = Number.POSITIVE_INFINITY;
const SIGN = { EMPTY: null, BLACK: 0, WHITE: 1 };
const RIVAL = [];
RIVAL[SIGN.BLACK] = SIGN.WHITE;
RIVAL[SIGN.WHITE] = SIGN.BLACK;

const tricksMatcher = new class TricksMatcher {
  constructor() {
    /**
     * '◼' means self, NOT BLACK PIECE.
     * '◻' means rival, NOT WHITE PIECE.
     * 'E' means blank(EMPTY).
     * 'W' means boundary(WALL).
     */
    const tricks = [];
    const score = {
      five: 50000,
      strong_four: 2000,
      strong_three: 1000,
      strong_two: 10,
      weak_four: 2000,
      weak_three: 100,
      weak_two: 1,
    }

    // Five in a row.
    // 成五/连五
    tricks.push({ regexp: new RegExp('◼◼◼◼◼', 'g'), score: score.five });

    // Strong four in a row.
    // 活四
    tricks.push({ regexp: new RegExp('E◼◼◼◼E', 'g'), score: score.strong_four });

    // Weak four in a row.
    // 冲四
    tricks.push({ regexp: new RegExp('E◼◼◼◼(◻|W)', 'g'), score: score.weak_four });
    tricks.push({ regexp: new RegExp('(W|◻)◼◼◼◼E', 'g'), score: score.weak_four });
    tricks.push({ regexp: new RegExp('◼◼◼E◼', 'g'), score: score.weak_four });
    tricks.push({ regexp: new RegExp('◼◼E◼◼', 'g'), score: score.weak_four });
    tricks.push({ regexp: new RegExp('◼E◼◼◼', 'g'), score: score.weak_four });

    // Strong three in a row.
    // 活三
    tricks.push({ regexp: new RegExp('EE◼◼◼EE', 'g'), score: score.strong_three });
    tricks.push({ regexp: new RegExp('(W|◻)E◼◼◼EE', 'g'), score: score.strong_three });
    tricks.push({ regexp: new RegExp('EE◼◼◼E(◻|W)', 'g'), score: score.strong_three });
    tricks.push({ regexp: new RegExp('E◼◼E◼E', 'g'), score: score.strong_three });
    tricks.push({ regexp: new RegExp('E◼E◼◼E', 'g'), score: score.strong_three });

    // Weak three in a row.
    // 眠三
    tricks.push({ regexp: new RegExp('(W|◻)E◼◼◼E(◻|W)', 'g'), score: score.weak_three });
    tricks.push({ regexp: new RegExp('(W|◻)◼◼◼EE', 'g'), score: score.weak_three });
    tricks.push({ regexp: new RegExp('EE◼◼◼(◻|W)', 'g'), score: score.weak_three });
    tricks.push({ regexp: new RegExp('(W|◻)◼E◼◼E', 'g'), score: score.weak_three });
    tricks.push({ regexp: new RegExp('E◼◼E◼(◻|W)', 'g'), score: score.weak_three });
    tricks.push({ regexp: new RegExp('(W|◻)◼◼E◼E', 'g'), score: score.weak_three });
    tricks.push({ regexp: new RegExp('E◼E◼◼(◻|W)', 'g'), score: score.weak_three });
    tricks.push({ regexp: new RegExp('◼E◼E◼', 'g'), score: score.weak_three });
    tricks.push({ regexp: new RegExp('◼EE◼◼', 'g'), score: score.weak_three });
    tricks.push({ regexp: new RegExp('◼◼EE◼', 'g'), score: score.weak_three });

    // Strong two in a row.
    // 活二
    tricks.push({ regexp: new RegExp('E◼E◼E', 'g'), score: score.strong_two });
    tricks.push({ regexp: new RegExp('EE◼◼EE', 'g'), score: score.strong_two });
    tricks.push({ regexp: new RegExp('E◼EE◼E', 'g'), score: score.strong_two });

    // Weak two in a row.
    // 眠二
    tricks.push({ regexp: new RegExp('(W|◻)◼◼EEE', 'g'), score: score.weak_two });
    tricks.push({ regexp: new RegExp('EEE◼◼(◻|W)', 'g'), score: score.weak_two });
    tricks.push({ regexp: new RegExp('(W|◻)◼E◼EE', 'g'), score: score.weak_two });
    tricks.push({ regexp: new RegExp('EE◼E◼(◻|W)', 'g'), score: score.weak_two });
    tricks.push({ regexp: new RegExp('(W|◻)◼EE◼E', 'g'), score: score.weak_two });
    tricks.push({ regexp: new RegExp('E◼EE◼(◻|W)', 'g'), score: score.weak_two });

    this.tricks = tricks;
  }

  match = (patch, piece) => {
    const lut = [];
    let total = 0, empty = true;
    lut[RIVAL[piece]] = '◻';
    lut[piece] = '◼';
    lut[SIGN.EMPTY] = 'E';
    const str = `W${patch.map(p => (p != SIGN.EMPTY && (empty = false), lut[p])).join('')}W`;
    empty || this.tricks.forEach(trick => {
      const result = str.match(trick.regexp);
      total += (result === null ? 0 : result.length * trick.score);
    });

    return total;
  }
}


class Judge {
  constructor(judgeBody) {
    for (let key in judgeBody)
      this[key] = eval(judgeBody[key]);
  }
}


class AI {
  init(judgeBody) {
    this.judge = new Judge(judgeBody);
  }

  load(chessboard) {
    this.chessboard = chessboard;
  }

  copy = () => {
    let i, j, temp = [], chessboard = this.chessboard;
    for (i = chessboard.length; i--;)
      for (temp[i] = [], j = chessboard[i].length; j--;)
        temp[i][j] = chessboard[i][j];
    return temp;
  }

  nearPoints = (board, row, col, drow, dcol) => {
    const boardSize = board.length;
    const pointSet = [];
    let r, c;
    for (let i = -1; i < 3; i += 2) {
      for (let j = 1; j < 2; ++j) {
        r = row + drow * i * j;
        c = col + dcol * i * j;
        (!drow || (0 <= r && r < boardSize)) && (!dcol || (0 <= c && c < boardSize)) && board[r][c] == SIGN.EMPTY && pointSet.push([r, c]);
      }
    }
    return pointSet;
  }

  getNextSteps = (board) => {
    const direction = [[0, 1], [1, 0], [1, 1], [-1, 1]];
    const { nearPoints } = this;
    const boardSize = board.length;
    const pointSet = [];
    for (let i = boardSize; i--;) {
      for (let j = boardSize; j--;) {
        if (board[i][j] != SIGN.EMPTY) {
          for (let k = 4; k--;) {
            const pointArr = nearPoints(board, i, j, ...direction[k]);
            pointArr.forEach(pt => {
              if (undefined === pointSet.find(finder => finder[0] == pt[0] && finder[1] == pt[1]))
                pointSet.push(pt);
            });
          }
        }
      }
    }

    return pointSet;
  }

  evaluate = (chessboard) => {
    const black = SIGN.BLACK;
    const white = SIGN.WHITE;
    const size = chessboard.length, score = [];
    let i, j, buffer, count = 0;
    score[black] = score[white] = 0;
    // horizontal.
    for (i = 0; i < size; ++i) {
      buffer = chessboard[i];
      score[black] += tricksMatcher.match(buffer, black);
      score[white] += tricksMatcher.match(buffer, white);
    }

    // vertical.
    for (i = 0; i < size; ++i) {
      for (j = count = 0, buffer = []; j < size; ++j)
        buffer[count++] = chessboard[j][i];
      score[black] += tricksMatcher.match(buffer, black);
      score[white] += tricksMatcher.match(buffer, white);
    }

    // ◥
    for (i = 0; i < size - 4; ++i) {
      for (j = count = 0, buffer = []; j < size - i; ++j)
        buffer[count++] = chessboard[j][i + j];
      score[black] += tricksMatcher.match(buffer, black);
      score[white] += tricksMatcher.match(buffer, white);
    }

    // ◣
    for (i = 1; i < size - 4; ++i) {
      for (j = count = 0, buffer = []; j < size - i; ++j)
        buffer[count++] = chessboard[i + j][j];
      score[black] += tricksMatcher.match(buffer, black);
      score[white] += tricksMatcher.match(buffer, white);
    }

    // ◤
    for (i = 4; i < size; ++i) {
      for (j = count = 0, buffer = []; j < i + 1; ++j)
        buffer[count++] = chessboard[j][i - j];
      score[black] += tricksMatcher.match(buffer, black);
      score[white] += tricksMatcher.match(buffer, white);
    }

    // ◢
    for (i = 4; i < size - 1; ++i) {
      for (j = count = 0, buffer = []; j < i + 1; ++j)
        buffer[count++] = chessboard[size - i - 1 + j][size - j - 1];
      score[black] += tricksMatcher.match(buffer, black);
      score[white] += tricksMatcher.match(buffer, white);
    }

    return score[white] - score[black] * 2;
  }

  /**
   * max-min search.
   * @param {Array} chessboard
   * @param {Array} point
   * @param {Number} piece 
   * @param {Number} deep 
   * @param {Number} alpha 
   * @param {Number} beta 
   */
  min = (chessboard, point, piece, deep, alpha, beta) => {
    const { evaluate, getNextSteps, judge, max } = this;

    let value = evaluate(chessboard);
    if (deep <= 0 || judge.check(chessboard, ...point)) return value;
    let best = MAX_VALUE;
    let pointSet = getNextSteps(chessboard);
    for (let pt of pointSet) {
      const [row, col] = pt;
      chessboard[row][col] = piece;
      value = max(chessboard, pt, RIVAL[piece], deep - 1, (best < alpha ? best : alpha), beta);
      chessboard[row][col] = SIGN.EMPTY;

      if (value < best)
        best = value;
      if (value <= alpha)
        break;
    }

    return best;
  }

  /**
   * max-min search.
   * @param {Array} chessboard
   * @param {Array} point
   * @param {Number} piece 
   * @param {Number} deep 
   * @param {Number} alpha 
   * @param {Number} beta 
   */
  max = (chessboard, point, piece, deep, alpha, beta) => {
    const { evaluate, getNextSteps, judge, min } = this;

    let value = evaluate(chessboard);
    if (deep <= 0 || judge.check(chessboard, ...point)) return value;
    let best = MIN_VALUE;
    let pointSet = getNextSteps(chessboard);
    for (let pt of pointSet) {
      const [row, col] = pt;
      chessboard[row][col] = piece;
      value = min(chessboard, pt, RIVAL[piece], deep - 1, alpha, (best > beta ? best : beta));
      chessboard[row][col] = SIGN.EMPTY;

      if (value > best)
        best = value;
      if (value >= beta)
        break;
    }

    return best;
  }

  decide = (deep = 3) => {
    const { copy, getNextSteps, min } = this;

    const chessboard = copy();
    const pointSet = getNextSteps(chessboard);
    const betterPointSet = [];
    let best = MIN_VALUE;
    for (let point of pointSet) {
      const [row, col] = point;
      chessboard[row][col] = SIGN.WHITE;
      const value = min(chessboard, point, SIGN.BLACK, deep - 1, MAX_VALUE, MIN_VALUE);
      chessboard[row][col] = SIGN.EMPTY;

      if (value == best)
        betterPointSet.push(point);
      else if (value > best) {
        betterPointSet.splice(0, betterPointSet.length);
        betterPointSet.push(point);
        best = value;
      }

    }

    return betterPointSet[Math.floor(Math.random() * betterPointSet.length)];
  }
}

const ai = new AI();
self.addEventListener('message', event => {
  const data = event.data;
  switch (data.type) {
    case 'judge':
      ai.init(new Judge(data.entity));
      break;
    case 'chessboard':
      ai.load(data.entity);
      setTimeout(() => self.postMessage(ai.decide()), 3000);
      break;
  }
});
