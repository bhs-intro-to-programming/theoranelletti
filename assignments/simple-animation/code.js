const drawFallingTriangle = (x, time) => {
  let x1 = x - 999;
  let x2 = x;
  let x3 = x + 999;
  let y1 = (time / 4) % height;
  let y2 = y1 + 1;
  let y3 = y1 - 1;
  drawFilledTriangle(10, 10, 10, height/2, width/2, height/3, 'blue');
};
animate(drawFrame);