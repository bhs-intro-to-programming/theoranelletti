const needHeavyCoat = (outside, cold) => {
  return outside && cold
}

const needSunscreen = (beach, skiing) => {
  return beach &&! skiing || !beach && skiing
}