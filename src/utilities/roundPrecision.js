const roundPrecision = (num, dec) => {
  if (typeof num !== "number" || typeof dec !== "number") return false;
  const numSign = num >= 0 ? 1 : -1;
  return (
    Math.round(num * Math.pow(10, dec) + numSign * 0.0001) / Math.pow(10, dec)
  ).toFixed(dec);
};

export default roundPrecision;
