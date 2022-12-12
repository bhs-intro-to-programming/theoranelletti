const makeRow = () => {
  return ['', '', '']
}

const makeBoard = () => {
  return  (['', '', ''],
          ['', '', ''],
          ['', '', ''])
}

const makeMove = (mark, row, column) => {
  return 
}

const allTheSame = (array) => {
  if (array['', '', ''] === array['','','']) {
    return true
  }  
  else return false
}

const extractColumn = (array, index) => {
  return array[board(index)]
}
