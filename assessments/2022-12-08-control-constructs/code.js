const emit = (a, b) => console.log(a + ', ' + b);

const yesIfEven = (num) => {
  if (num % 2 === 0) {
    return 'yes'
  }
  else return 'no'
}

const countXs = (s) => {
    if (s.indexOf(s.length, 'x')) {
    return 
    }
}

const timesTable = (num) => {
  for (let i = 0; i < num; i++) {
    return emit(num, num, num) && emit(num, num, num)
  }
}

const containsX = (s) => {
  if (s.indexOf(s.length, 'x')) {
    return true
  }
  else return false
}