export default function setFromArray(array) {
  const uniqueSet = new Set(array);
  return `Set { ${[...uniqueSet].join(', ')} }`;
}
