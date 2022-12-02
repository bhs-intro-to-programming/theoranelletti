const needHeavyCoat = (outside, cold) => {
  return outside && cold
}

const needSunscreen = (beach, skiing) => {
  return beach &&! skiing || !beach && skiing
}

const needMittens = (outside, warm) => {
  return outside &&! warm
}