export default function arrayDiff(array1, array2) {
  const diff = [...array1].map((i, idx) => (i !== array2[idx] ? i : null));
  return diff.filter((i) => i);
}
