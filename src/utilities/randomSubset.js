// Get sub-array of first n elements after shuffled
const randomSubset = (n, array) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

export default randomSubset;
