export const getUnique = (arr: number[]): number | null => {
  const unique = arr.reduce((a, b) => a ^ b);
  if (arr.includes(0) && unique == 0) return null;
  return unique;
};

console.dir(getUnique([1, 1, 2, 2, 3, 0, 0]));
console.dir(getUnique([1, 1, 2, 2, 0]));
