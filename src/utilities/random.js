export const randomInt = (low = 1, high = 6) => {
  return Math.floor(Math.random() * (high - low + 1) + low);
};

export const randomDec = (low = 0, high = 1, toFixed = 1) => {
  let val = Math.random() * (high - low) + low; // this will get a number between low and high;
  return +val.toFixed(toFixed);
};

function randomPercentageOf(value, percent = 8, toFixed = 1) {
  if (percent === 0) return +value;
  const max = (value / 100) * percent;
  const random = Math.random() * (-max - max) + -max;
  const variance = randomDec(-max, max, toFixed);
  return +variance;
}
