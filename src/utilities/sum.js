const sum = arr => arr.reduce((a,b) => a + b, 0);

export function sumInt(args) {
  const arg = args || arguments;
  arg.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0);
}

export default sum;
