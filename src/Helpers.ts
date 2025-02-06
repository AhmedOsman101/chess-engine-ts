export const getUnique = (arr: number[]): number | undefined => {
  let zeroCount = 0;
  const unique = arr.reduce((a, b) => {
    if (b === 0) zeroCount++;
    return a ^ b;
  });
  if (zeroCount > 1 && unique === 0) return undefined;

  return unique;
};

console.log(getUnique([1, 1, 2, 2, 3, 3, 0, 0]));
console.log(getUnique([1, 1, 2, 2, 0]));
