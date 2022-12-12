const makeRow = () => {
  return ['', '', '']
}

const makeBoard = () => {
  return  ['', '', ''],
          ['', '', ''],
          ['', '', '']
}

const makeMove = (mark, row, column) => {
  return ['mark' : mark, 'row' : row, 'column' : column]
}

const placeMark = () => {
  return ['', '', ''],
         ['', '', ''],
         ['', '', '']
}

const allTheSame = () => {
  if (['', '', ''] === ['', '', '']) {
    return true
  }  
  else return false
}

const extractColumn = () => {
  return ['', '', ''],
         ['', '', ''],
         ['', '', '']
}

const recordMove = (array, object) => {
  
}