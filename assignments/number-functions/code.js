const add = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}

const mod = (a, b) => {
  return a % b;
}

const averageOfTwo = (a, b) => {
  return (a + b) / 2;
}

const averageOfThree = (a, b, c) => {
  return (a + b + c) / 3;
}

const distance = (a, b) => {
  return Math.abs(a - b);
}

const manhattanDistance = (x1, x2, y1, y2) => {
  return Math.abs(x1 - y1) + Math.abs(x2 - y2);
}

const euclideanDistance = (x1, x2, y1, y2) => {
  return Math.sqrt(Math.abs(x1 - y1)**2) + (Math.abs(x2 - y2)**2);
}