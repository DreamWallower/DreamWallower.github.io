export default class Judge {
  link5 = (chessboard, row, col, drow, dcol) => {
    const checkRow = (v) => drow && (0 > v || v >= chessboard.length);
    const checkCol = (v) => dcol && (0 > v || v >= chessboard[0].length);
    const checkPiece = (r, c) => chessboard[row][col] != chessboard[r][c];
    let r, c, num = 1;
    for (let i = -1; i < 2; i += 2) {
      for (let j = 1; j < 5; ++j) {
        r = row + drow * i * j;
        c = col + dcol * i * j;
        if (checkRow(r) || checkCol(c) || checkPiece(r, c)) break;
        num++;
      }
    }
    return num > 4;
  }

  check = (chessboard, row, col) => {
    return (
      this.link5(chessboard, row, col, 0, +1) ||
      this.link5(chessboard, row, col, -1, 1) ||
      this.link5(chessboard, row, col, +1, 0) ||
      this.link5(chessboard, row, col, +1, 1)
    );
  }

  toString() {
    return { check: this.check.toString(), link5: this.link5.toString() };
  }
}