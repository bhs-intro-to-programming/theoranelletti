const WHITE_KING = '♔';
const WHITE_QUEEN = '♕';
const WHITE_ROOK = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN = '♙';
const BLACK_KING = '♚';
const BLACK_QUEEN = '♛';
const BLACK_ROOK = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN = '♟';

const drawBoard = () => {
  for (let i = 0; i < 8; i++) {
    const x = (i + 1) * width / 8
    drawLine(x, 0, x, height, 'black', 3)
  }
  for (let i = 0; i < 8; i++) {
    const x = (i + 1) * height / 8
    drawLine(0, x, width, x, 'black', 3)
  }
}

drawBoard()

