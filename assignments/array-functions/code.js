const countTens = (array) => {
  let num = 0
  for (const element of array) {
    if (element === 10) {
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
  for (const element of array) {
    if (element > 100)
    return true
    else return false
  } 
}