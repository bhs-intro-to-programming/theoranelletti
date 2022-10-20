const countTens = (array) => {
  let num = 0
  for (const element of array) {
    if (element === 10) {
      num++
    }
  }
  return num
};

const sum