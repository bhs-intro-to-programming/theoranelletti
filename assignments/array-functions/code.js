const countTens = (array) => {
  let num = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 10) {
      num++
    }
  }
  return num
};

const sum = (array) => {
  let add = 0
  for (const element of array) {
    add += element;
  }
  return add
};

const evens = (array) => {
  let evenarray = []
  for (const element of array) {
    if (element % 2 === 0)
      evenarray.push(element)
  }
  return evenarray
}

const anyOverOneHundred = (array) => {
  let huns = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      huns = 1
    }
    if (huns === 1) {
      return true
    }
    else return false
  }
}