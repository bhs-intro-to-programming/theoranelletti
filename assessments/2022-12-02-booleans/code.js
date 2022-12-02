const needHeavyCoat = (outside, cold) => {
  return outside && cold
}

const needSunscreen = (beach, skiing) => {
  return beach && !skiing || !beach && skiing
}

const needMittens = (outside, warm) => {
  return outside && !warm
}

const isVenomous = (striped, bluehead) => {
  return striped && bluehead || striped && !bluehead || !striped && !bluehead
}

const okaySpeed = (speedlimitmph, carspeedmph) => {
  if (carspeedmph >= (speedlimitmph - 10) && carspeedmph <= (speedlimit + 10)
}

const twiceAsExpensive = (priceofitemone, priceofitemtwo) => {
  if (priceofitemone > (priceofitemtwo * 2)) {
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

const isMagicNumber = (number) => {
  if (number === 42) {
    return true
  }
  if (number === 17) {
    return true
  }
  else return false
}