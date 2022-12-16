const makeRow = () => {['', '', '']}

const makeBoard = () => {
         [['', '', '']
         ['', '', '']
         ['', '', '']];
}

const makeMove = (m, r, c) => {
  return {m : m, r : r, c : c,};
}

const allTheSame = (array) => {
  return array[0] === array[1] && array[1] === array[2]
}

const extractColumn = () => {
  return makeBoard
}