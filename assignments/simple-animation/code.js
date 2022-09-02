const drawFrame = (time) => {
  clear();
  drawFilledCircle((time / 2) % width, height / 7, 25, 'grey');
  drawFilledCircle((time / 120) % width, height / 2, 25, 'orange');
  drawFilledCircle((time / 7200) % width, height / 1.2, 25, 'blue');
};

animate(drawFrame);