/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (pulled, smoke, drill) => {
  return pulled || smoke || drill;
};

const canBePresident = (years, naturalborn, livedinUS) => {
  return years >= 35 && naturalborn && livedinUS >= 14;
};

const willSeeTweet = (follow, followRT, block) => {
  return (follow || followRT) && !block;
};