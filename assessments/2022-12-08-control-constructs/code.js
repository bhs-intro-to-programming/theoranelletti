
const emit = (a, b) => console.log(a + ', ' + b);

const yesIfEven = (num) => {
  if (num % 2 === 0) {
    return 'yes'
  }
  else return 'no'
}

const countXs = (s) => {
  return s.indexOf(s.length, 'x')
}

const containsX = (s) => {
  if (s.indexOf(s.length, 'x')) {
    return true
  }
}