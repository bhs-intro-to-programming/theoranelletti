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
  if (speedlimitmph >= carspeedmph || speedlimitmph <= carspeedmph) {
    return true
  }
  else return false
}

const twiceAsExpensive = (s1, s2) => {
  if (s1 > (s2*2)) {
    return true
  }
  else return false
}

const winningRecord = (wins, losses, ties) => {
  if ((losses + ties) < wins) {
    return true
  }
  else return false
}

const isMagicNumber = (s1) => {
  if (s1 = 17 || 42) {
    return true
  }
  else return false
}