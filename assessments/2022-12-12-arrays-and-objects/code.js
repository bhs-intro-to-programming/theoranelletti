const makeRow = () => {['', '', '']}

const makeBoard = () => {
  return [['', '', '']
         ['', '', '']
         ['', '', '']];
}

const makeMove = (m, r, c) => {
  return {m : m, r : r, c : c,};
}

const placeMark = () => {
  
}

const allTheSame = (array) => {
  return array[0] === array[1] && array[1] === array[2]
}

