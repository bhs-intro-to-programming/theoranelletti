const drawFrame = (time) => {
  clear();
  drawFilledCircle((time / 2) % width, height / 7, 25, 'grey');
  drawFilledCircle((time / 120) % width, height / 2, 25, 'orange');
  drawFilledCircle((time / 7200) % width, height / 1.2, 25, 'blue');
};

const drawBall = (x1, y1, x2, y2, time, color) => {
  const d = distance(x1, y1, x2, y2);
  const p = fromStart(d, time, 2500);
  const x = x1 + p / d * (x2 - x1);
  const y = y1 + p / d * (y2 - y1);
  drawFilledCircle(x, y, 10, color);
};
  
  animate(drawFrame);