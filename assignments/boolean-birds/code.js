/*
 * Important facts about the birds of Booleana.
 * 
 * Coloration and markings:
 * 
 *   - Flobby Birds and Bloggy Birds are red.
 *   - Flibble Birds and Globby Birds are not red.
 *   - Flobby Birds and Flibble Birds are spotted.
 *   - Bloggy Birds and Globby Birds are not spotted.
 * Diet:
 * 
 *   - Flobby Birds eat fish, nuts, and worms.
 *   - Bloggy Birds eat mice, nuts, and worms.
 *   - Flibble Birds eat fish, mice, and worms.
 *   - Globby Birds eat fish, mice, and nuts.
 */
const isFlobbyBird = (redbird, spottedbird) => {
  return redbird && spottedbird
}
const isBloggyBird = (redbird, spottedbird) => {
  return redbird && !spottedbird
}
const isFlibbleBird = (redbird, spottedbird) => {
  return !redbird && spottedbird
}
const isGlobbyBird = (redbird, spottedbird) => {
  return !redbird && !spottedbird
}
const eatsWorms = (redbird, spottedbird) => {
  return redbird || spottedbird
}
const eatsNuts = (redbird, spottedbird) => {
  return redbird || !spottedbird
}
const eatsFish = (redbird, spottedbird) => {
  return !redbird || spottedbird
}
const eatsMice = (redbird, spottedbird) => {
  return !redbird || !spottedbird
}
const isRed = (redbird) => {
  return redbird === 'Flobby' || redbird === 'Bloggy'
}
const isSpotted = (spottedbird) => {
  return spottedbird === 'Flobby' || spottedbird === 'Flibble'
}
const isNotRed = (notredbird) => {
  return notredbird === 'Flibble' || notredbird === 'Globby'
}
const isNotSpotted = (notspottedbird) => {
  return notspottedbird === 'Bloggy' || notspottedbird === 'Globby'
}