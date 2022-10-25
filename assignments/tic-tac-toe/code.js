// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

registerOnclick((x, y) => {
  drawText('X', 800, 500, 'black', Math.min(50, 50) * 0.3);
});

const drawLine = () => {
  for(let i=0; i<2; i++;) {
    drawLine(width/3, 0, width/3, height/2, 'black', 1)
  }
}