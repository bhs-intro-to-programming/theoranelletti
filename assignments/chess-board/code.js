const WHITE_KING   = '♔';
const WHITE_QUEEN  = '♕';
const WHITE_ROOK   = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN   = '♙';
const BLACK_KING   = '♚';
const BLACK_QUEEN  = '♛';
const BLACK_ROOK   = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN   = '♟';

// Example of drawing one of the pieces
drawText(WHITE_KING, width/2, height/2, 'black', 64);

let turn = "X";
registerOnclick((x, y) => {

  const rowHeight = height / 3
  const box_y = Math.floor(y / rowHeight)

  const rowWidth = width / 3
  const box_x = Math.floor(x / rowWidth)
  drawText(turn, box_x * (width / 3) - 75 + width / 6, box_y * (height / 3) + 75 + height / 6, 'black', 180);
  turn = turn === "X" ? "O" : "X";
});

const drawBoard = () => {
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * width / 8
    drawLine(x, 0, x, height, 'black', 8)
  }
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * height / 8
    drawLine(0, x, width, x, 'black', 8)
  }
}

drawBoard()