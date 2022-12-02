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
  if (speedlimitmph > carspeedmph(speedlimitmph + 10)  || speedlimitmph < carspeedmph(speedlimitmph - 10)) {
    return true
  }
  else return false
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

const isMagicNumber = () => {
  if ( 42 || 17) {
    return true
  }
  else return false
}