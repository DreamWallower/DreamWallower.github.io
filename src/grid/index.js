/**
 * 'src/grid/index.js'
 *
 * Grid system.
 */
const PIXEL = { N: null, O: 0, X: 1 };

export default class Grid {
  constructor(canvas, dpi = 8) {
    this.cvs = canvas;
    this.ctx = canvas.getContext('2d');
    this.resolution = { width: 96, height: 65, dpi };
    this.screen = { width: canvas.width = this.resolution.width * this.resolution.dpi, height: canvas.height = this.resolution.height * this.resolution.dpi };
    this.buffer = [];
    this.init();
  }

  init() {
    let i, j, { buffer, resolution: { width, height } } = this;
    for (i = height; i--;)
      for (buffer[i] = [], j = width; j--;)
        buffer[i][j] = PIXEL.O;
  }

  putImage = (gridData, row, col) => {
    const { data = [], position = [] } = gridData;
    const srow = row || position[0] || 0;
    const scol = col || position[1] || 0;
    let buffer = this.buffer;
    for (let i = 0; i < data.length; ++i)
      for (let j = 0; j < data[0].length; ++j)
        data[i][j] != PIXEL.N && (buffer[srow + i][scol + j] = data[i][j]);
  }

  clear = (sRow = 0, sCol = 0, tRow = this.resolution.height, tCol = this.resolution.width) => {
    let buffer = this.buffer;
    for (let i = sRow; i < tRow; ++i)
      for (let j = sCol; j < tCol; ++j)
        buffer[i][j] = PIXEL.O;
  }

  render = () => {
    let { ctx, buffer, resolution: { width, height, dpi } } = this;
    ctx.fillStyle = '#92AEB9';
    ctx.fillRect(0, 0, this.screen.width, this.screen.height);
    ctx.fillStyle = '#2E3649';
    for (let i = 0, row = 0; i < height; ++i, row += dpi)
      for (let j = 0, col = 0; j < width; ++j, col += dpi)
        buffer[i][j] && ctx.fillRect(col, row, dpi, dpi);
  }
}