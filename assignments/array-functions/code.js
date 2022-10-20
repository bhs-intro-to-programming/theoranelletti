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
  let even = 0
  for (const element of array) {
    even + element;
  }
  return even
};