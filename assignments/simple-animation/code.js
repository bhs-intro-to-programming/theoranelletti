// This is an example of a function definition. This function is called by the
// underlying animation framework thanks to the call to animate below. This
// function is responsible for drawing one frame of the animation. You can
// change the code in here using the same functions you had in the simple
// drawing exercise to draw shapes. The argument to this function, time, is the
// number of milliseconds (one millionth of a second) since the program started.
const drawFrame = (time) => {
  clear();
  drawFilledCircle((time / 2) % width, height / 7, 25, 'grey');
  drawFilledCircle((time / 120) % width, height / 2, 25, 'orange');
  drawFilledCircle((time / 7200) % width, height / 1.2, 25, 'blue');
};

// Leave this code here or the animation won't run. Also don't change the name
// of drawFrame either here or where it is defined. (Or, if you must, change it
// the same way in both places.)
animate(drawFrame);