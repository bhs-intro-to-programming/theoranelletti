const makeRow = () => {
  return ['', '', '']
}

const makeBoard = () => {
  return ['', '', ''],
    ['', '', ''];
    ['', '', ''];
}

const makeMove = (mark, row, column) => {
  return [mark, row, column]
}

const placeMark = ()