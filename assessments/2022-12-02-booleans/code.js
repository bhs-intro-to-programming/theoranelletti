const needHeavyCoat = (outside, cold) => {
  return outside && cold
}

const needSunscreen = (beach, skiing) => {
  return beach &&! skiing || !beach && skiing
}

const needMittens = (outside, warm) => {
  return outside &&! warm
}

const isVenomous = (striped, bluehead) => {
  return striped && bluehead || striped &&! bluehead || !striped &&! bluehead
}

const okaySpeed = (speedlimitmph, carspeedmph) => {
  if (speedlimitmph >= (carspeedmph) || speedlimitmph <= (carspeedmph)) {
    return true
  }
  else return false
}