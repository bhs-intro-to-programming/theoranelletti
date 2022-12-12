const makeRow = () => {
  return ['', '', '']
}

const makeBoard = () => {
  return ['', '', ''],
  ['', '', ''],
  ['', '', '']
}

const makeMove = (mark, row, column) => {
  return [s(mark), row, column]
}

const placeMark = ()