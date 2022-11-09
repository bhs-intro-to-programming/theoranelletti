// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

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
    const x = (i + 1) * width / 3
    drawLine(x, 0, x, height, 'black', 3)
  }
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * height / 3
    drawLine(0, x, width, x, 'black', 3)
  }
}

drawBoard()