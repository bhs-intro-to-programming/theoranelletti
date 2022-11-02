// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

let turn = "X";
registerOnclick((x, y) => {
  drawText (turn, x - 50, y + 50, 'black', Math.min(600, 600) * 0.3);
  turn = turn === "X" ? turn = "O" : turn = "X";
});

const drawBoard = () => {
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * width / 3
    drawLine(x, 0, x, height, 'black', 3)
  }
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * height / 3
    drawLine(0, x, width, x, 'black', 3)
  }
}

drawBoard()

const yRow = (y) => {
  let rowHeight = height / 3;
  Math.floor(rowHeight)
}

const xRow = (x) => {
  let rowWidth = width / 3;
  Math.floor(rowWidth)
}