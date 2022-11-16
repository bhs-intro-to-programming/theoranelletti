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

drawText(WHITE_KING, width/1.87, height/10, 'black', 64);
drawText(WHITE_QUEEN, width/2.5, height/10, 'black', 64);
drawText(WHITE_ROOK, width/1.1, height/10, 'black', 64);
drawText(WHITE_ROOK, width/30, height/10, 'black', 64);
drawText(WHITE_BISHOP, width/1.52, height/10, 'black', 64);
drawText(WHITE_BISHOP, width/3.5, height/10, 'black', 64);
drawText(WHITE_KNIGHT, width/6.2, height/10, 'black', 64);
drawText(WHITE_PAWN, width/1.87, height/4.5, 'black', 64);
drawText(BLACK_KING, width/1.87, height/1.04, 'black', 64);
drawText(BLACK_QUEEN, width/2.5, height/1.04, 'black', 64);
drawText(BLACK_ROOK, width/30, height/1.04, 'black', 64);
drawText(BLACK_ROOK, width/1.1, height/1.04, 'black', 64);
drawText(BLACK_BISHOP, width/3.5, height/1.04, 'black', 64);
drawText(BLACK_BISHOP, width/1.52, height/1.04, 'black', 64);
drawText(BLACK_KNIGHT, width/6.2, height/1.04, 'black', 64);
drawText(BLACK_KNIGHT, width/1.27, height/1.04, 'black', 64);
drawText(BLACK_PAWN, width/1.87, height/1.2, 'black', 64); 