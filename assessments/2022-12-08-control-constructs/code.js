const emit = (a, b) => console.log(a + ', ' + b);

const yesIfEven = (num) => {
  if (num % 2 === 0) {
    return 'yes'
  }
  else return 'no'
}

const countXs = (s) => {
  return s.indexOf('x', s.length)
}

const timesTable = (num) => {
  for (let i = 0; i < num; i++) {
    return emit(num, num, num)
  }
  for (let i = 0; i < num; i++) {
    return emit(num, num, num)
  }
}

const containsX = (s) => {
  if (s.indexOf('x', s.length())) {
    return true
  }
  else return false
}

const sumSquares = (num) => {
  for (let i = 0; i < num - 1; i++) {

  }
}