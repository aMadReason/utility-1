export const randomInt = (low = 1, high = 6) => {
  return Math.floor(Math.random() * (high - low + 1) + low);
};

export const randomDec = (low = 0, high = 1, toFixed = 1) => {
  return (Math.random() * (high - low + low) + low).toFixed(toFixed);
};
