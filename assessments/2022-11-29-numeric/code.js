const totalEggs = (hard, soft) => {
  return hard + soft;
}

const chocolatesPerPerson = (chocolate, people) => {
  return Math.floor(chocolate / people);
}

const extraChocolates = (chocolate, people) => {
  return Math.floor(chocolate / people);
}

const leftOut = (chocolate, people) => {
  return Math.max(chocolate, people)
}

const probabilityAllHeads = (numbercoinflipped) => {
  return numbercoinflipped / (numbercoinflipped * (numbercoinflipped ** 2));
}

const futureHour = (current, future) => {
  return (current + future) % 24;
}

const presentsBudget = (friends, price) => {
  return friends * price;
}

const perPresent = (totalmoney, numpresents) => {
  return totalmoney / numpresents;
}

const wrappingCombos = (wrapping, ribbions, bows) => {
  return (wrapping * ribbions) * bows;
}

const biggestNumber = (numdigits) => {
  return (1 * (10 **(numdigits))) - 1;
}