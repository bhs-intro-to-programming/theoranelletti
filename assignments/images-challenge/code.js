/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */

const fillwithcircle = () => {
  for (let x = 0; x < 32; x++)
    if (x > 0) {
      drawFilledCircle(x * 15.5, height / 2, 8, 'blue')
    }
}
fillwithcircle();

const fillwithcircles = () => {
  for (let x = 1; x < 32; x++)
    if (x > 0) {
      drawFilledCircle(x * 20, height / 3, 8, 'blue')
      drawFilledCircle(x * 20, height / 3, 8, 'red')
    }
}
fillwithcircles();