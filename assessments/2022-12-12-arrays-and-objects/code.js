const makeRow = () => {
  return ['', '', '']
}

const makeBoard = () => {
  return  (['', '', ''],
          ['', '', ''],
          ['', '', ''])
}

const makeMove = (mark, row, column) => {
  return {'mark' : mark, 'row' : row, 'column' : column}
}

const allTheSame = (array) => {
  if (array[0] === array[1] && array[1] === array[2] && array[2] === array[0]) {
    return true
  }  
  else return false
}