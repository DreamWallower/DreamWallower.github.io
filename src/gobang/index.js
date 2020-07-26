/**
 * 'src/gobang/index.js'
 * 
 * Main system of the game.
 */
import Source from '../../assets/index.js'
import Judge from '../judge/index.js'
import Grid from '../grid/index.js'

const SIGN = { EMPTY: null, BLACK: 0, WHITE: 1 };
const { BUBBLE: BUBBLE_IMG, PLAYER: PLAYER_IMG, COMPUTER: COMPUTER_IMG, ENDING: ENDING_IMG } = Source;
const { board: { size: BOARD_SIZE, offset: BOARD_OFFSET, image: BOARD_IMG } } = Source.CHECKERBOARD;
const { piece: { size: PIECE_SIZE, black: PIECE_BLACK, white: PIECE_WHITE } } = Source.CHECKERBOARD;
const PIECE_OFFSET = [BOARD_IMG.position[0] + BOARD_OFFSET[0] - PIECE_SIZE, BOARD_IMG.position[1] + BOARD_OFFSET[1] - PIECE_SIZE];
const PIECE_IMG = [PIECE_BLACK, PIECE_WHITE];
const judge = new Judge();


export default class Gobang {
  constructor(canvas) {
    this.cvs = canvas;
    this.grid = new Grid(canvas, 4);
    this.size = BOARD_SIZE;
    this.chessboard = [];
  }

  /**
   * Game start.
   */
  start = () => {
    this.init();
    this.AI = new Worker('src/AI/index.js', { name: 'AI' });
    this.AI.postMessage({ type: 'judge', entity: judge.toString() });
    this.AI.addEventListener('message', this.handleMessage);
    this.cvs.addEventListener('click', this.handleClick);
  }

  /**
   * Initialization.
   */
  init() {
    let i, j, { size, chessboard } = this;
    for (i = size; i--;)
      for (chessboard[i] = [], j = size; j--;)
        chessboard[i][j] = SIGN.EMPTY;
    this.drawBoard();
    this.drawComputer('wait');
    this.drawPlayer('think');
  }

  /**
   * Draw chess board.
   */
  drawBoard() {
    this.grid.putImage(BOARD_IMG);
    this.grid.render();
  }

  /**
   * Draw chess piece.
   * @param {Number} row position y.
   * @param {Number} col position x.
   * @param {Number} type '0' means black, '1' means white.
   */
  drawPiece(row, col, type) {
    this.grid.putImage(PIECE_IMG[type], PIECE_OFFSET[0] + (row << 2), PIECE_OFFSET[1] + (col << 2));
    this.grid.render();
  }

  /**
   * Draw the player's profile.
   * @param {String} type 'think' or 'wait'
   */
  drawPlayer(type) {
    switch (type) {
      case 'think':
        this.grid.putImage(PLAYER_IMG.think[0]);
        this.grid.render();
        this.playerTimerCycle = 0;
        this.playerTimer = setInterval(() => {
          this.grid.putImage(PLAYER_IMG.think[this.playerTimerCycle % 2]);
          this.grid.putImage(BUBBLE_IMG[this.playerTimerCycle % 4]);
          this.grid.render();
          this.playerTimerCycle++;
        }, 800);
        break;

      case 'wait':
        this.playerTimer && clearInterval(this.playerTimer);
        this.grid.putImage(PLAYER_IMG.wait);
        this.grid.putImage(BUBBLE_IMG[3]);
        this.grid.render();
        this.playerTimer = 0;
        break;

      case 'lose':
        this.playerTimer && clearInterval(this.playerTimer);
        this.grid.putImage(PLAYER_IMG.lose);
        this.grid.render();
        this.playerTimer = 0;
        break;
    }
  }

  /**
   * Draw the computer's profile.
   * @param {String} type 'think' or 'wait'
   */
  drawComputer(type) {
    switch (type) {
      case 'think':
        this.grid.putImage(COMPUTER_IMG.think);
        this.grid.render();
        this.aiTimerCycle = 0;
        this.aiTimer = setInterval(() => {
          this.grid.putImage(BUBBLE_IMG[this.aiTimerCycle % 3], 33);
          this.grid.render();
          this.aiTimerCycle++;
        }, 800);
        break;

      case 'wait':
        this.aiTimer && clearInterval(this.aiTimer);
        this.grid.putImage(COMPUTER_IMG.wait);
        this.grid.putImage(BUBBLE_IMG[3], 33);
        this.grid.render();
        this.aiTimer = 0;
        break;

      case 'lose':
        this.aiTimer && clearInterval(this.aiTimer);
        this.grid.putImage(COMPUTER_IMG.lose);
        this.grid.render();
        this.aiTimer = 0;
        break;
    }
  }

  /**
   * Draw the ending.
   * @param {Number} winner '0' means black, '1' means white.  
   */
  drawEnding(winner) {
    this.AI.terminate();
    this.drawPlayer(winner == SIGN.BLACK ? 'wait' : 'lose');
    this.drawComputer(winner == SIGN.WHITE ? 'wait' : 'lose');

    // Draw the ending scene.
    setTimeout(() => {
      this.grid.clear();
      this.endingTimerCycle = 0;
      this.endingTimer = setInterval(() => {
        this.grid.putImage(ENDING_IMG[this.endingTimerCycle % 2]);
        this.grid.render();
        this.endingTimerCycle++;
      }, 600);

      // Clear the ending scene. 
      setTimeout(() => {
        this.endingTimer && clearInterval(this.endingTimer);
        this.grid.clear();
        this.grid.render();
        this.endingTimer = 0;

        // Restart game.
        this.start();
      }, 4000);
    }, 1000);
  }

  /**
   * Set piece.
   * @param {Number} row position y.
   * @param {Number} col position x.
   * @param {Number} type '0' means black, '1' means white.
   */
  set = (row, col, type) => {
    this.chessboard[row][col] = type;
    this.drawPiece(row, col, type);
  }

  /**
   * Returns whether the postion is empty.
   * @param {Number} row position y.
   * @param {Number} col position x.
   */
  empty = (row, col) => this.chessboard[row][col] == SIGN.EMPTY;

  /**
   * Handled with player CLICK event.
   * @param {Object} event 
   */
  handleClick = (event) => {
    const clientRect = this.cvs.getBoundingClientRect();
    const row = (Math.floor((event.pageY - clientRect.top) / this.grid.resolution.dpi) - 2) >> 2;
    const col = (Math.floor((event.pageX - clientRect.left) / this.grid.resolution.dpi) - 6) >> 2;
    // Effective click area.
    if ((-1 < row && row < this.size) && (-1 < col && col < this.size) && this.empty(row, col))
      (this.playerTurn(row, col) || this.aiTurn());
  }

  /**
   * Handled with messages returned by worker threads.
   * @param {Object} event 
   */
  handleMessage = (event) => {
    const [row, col] = event.data;
    this.set(row, col, SIGN.WHITE);
    const result = judge.check(this.chessboard, row, col, SIGN.WHITE);
    if (result)
      this.drawEnding(SIGN.WHITE);
    else {
      this.drawComputer('wait');
      this.drawPlayer('think');
      this.cvs.addEventListener('click', this.handleClick);
    }
    return result;
  }

  /**
   * Player turn.
   * @param {Number} row position y.
   * @param {Number} col position x.
   */
  playerTurn(row, col) {
    this.set(row, col, SIGN.BLACK);
    this.cvs.removeEventListener('click', this.handleClick);
    const result = judge.check(this.chessboard, row, col, SIGN.BLACK);
    if (result)
      this.drawEnding(SIGN.BLACK);
    else {
      this.drawPlayer('wait');
    }
    return result;
  }

  /**
   * Computer turn.
   */
  aiTurn() {
    this.AI.postMessage({ type: 'chessboard', entity: this.chessboard });
    this.drawComputer('think');
  }
}