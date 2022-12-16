const makeRow = () => {['', '', '']}

const makeBoard = () => {
  return [['', '', '']
         ['', '', '']
         ['', '', '']]
}

const makeMove = (m, r, c) => {
  return {m : m, r : r, c : c,};
}