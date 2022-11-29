const totalEggs = (hard, soft) => {
  return hard + soft;
}

const chocolatesPerPerson = (chocolate, people) => {
  return Math.floor(chocolate / people);
}

const extraChocolates = (chocolate, people) => {
  return (chocolate / people);
}

const leftOut = (chocolate, people) => {
  return Math.max(chocolate + people)
}

const probabilityAllHeads = (numbercoinflipped) => {
  return numbercoinflipped / (numbercoinflipped * 2);
}