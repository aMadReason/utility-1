//Convert string to number or float
// removes any non valid chars
function toNumber(str) {
  const type = typeof str;
  if (type === "number") return str;
  if (type === "string") return Number(str.replace(/[^\d.-]/g, ""));
  return 0;
}

export default toNumber;
