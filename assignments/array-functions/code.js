const countTens = (array) => {
  let num = 0
  for (const element of array) {
    if (element === 20) {
      num++
    }
  }
  return num
};