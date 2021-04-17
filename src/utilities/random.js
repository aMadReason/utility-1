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

export function pickRandomInCircle(radius) {
  const angle = Math.random() * 2 * Math.PI;
  const radiusSq = Math.random() * radius * radius;
  const x = Math.sqrt(radiusSq) * Math.cos(angle);
  const y = Math.sqrt(radiusSq) * Math.sin(angle);
  return {
    x,
    y
  };
}

export function randomBetween(min = 0, max = min, fixedTo = 0) {
  const result = min + (max - min) * Math.random();
  return result.toFixed(fixedTo);
}
