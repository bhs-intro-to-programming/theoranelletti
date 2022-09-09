const drawFrame = (time) => {
  clear();
  drawFilledCircle((time / 2) % width, height / 7, 25, 'grey');
  drawFilledCircle((time / 120) % width, height / 2, 25, 'orange');
  drawFilledCircle((time / 7200) % width, height / 1.2, 25, 'blue');
};

const drawFilledTriangle(10, 10, 10, height/2, width/2, height/3, 'blue');
  
  animate(drawFrame);