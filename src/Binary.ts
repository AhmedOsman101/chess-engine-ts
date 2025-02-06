const logBin = (x: number, y: number = x) => {
  console.log(y.toString(2).padStart(bitLen(x), "0"));
};

const isEven = (n: number): boolean => (n & 1) === 0;

const isPowerOfTwo = (x: number): boolean => x !== 0 && !(x & (x - 1));

const bitLen = (n: number): number => {
  let length = 0;
  let num = n;

  while (n > 0) {
    num >>= 1;
    length++;
  }
  return length;
};

const checkBit = (x: number, n: number): number => x & (1 << n);

const accessNBit = (x: number, n: number): number => (x >> (bitLen(x) - n)) & 1; // left to right

const accessBit = (x: number, n: number): number => (x >> (n - 1)) & 1; // right to left

const toggleBit = (x: number, n: number): number => x ^ (1 << (n - 1));
const setBit = (x: number, n: number): number => x | (1 << (n - 1));
const unsetBit = (x: number, n: number): number => x & ~(1 << (n - 1));
const toggleBetweenValues = (num: number, val1: number, val2: number) =>
  val1 ^ val2 ^ num;

const binAddition = (a: number, b: number): number => (a | b) + (a & b); // a+b = a|b + a&b
const _binAddition2 = (a: number, b: number): number =>
  (a ^ b) + ((a & b) << 1); // a+b = a^b + 2(a&b)

const x = 21;
let y = checkBit(x, 1);

logBin(x, y);

y = checkBit(x, 2);

logBin(x, y);

y = checkBit(x, 3);

logBin(x, y);

y = checkBit(x, 4);

logBin(x, y);

y = checkBit(x, 5);

logBin(x, y);

export default {
  logBin,
  isEven,
  isPowerOfTwo,
  bitLen,
  checkBit,
  accessBit,
  accessNBit,
  toggleBit,
  setBit,
  unsetBit,
  toggleBetweenValues,
  binAddition,
};
