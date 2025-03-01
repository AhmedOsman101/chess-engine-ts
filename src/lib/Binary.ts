export const bin2str = (num: number, len: number | null = null) => {
  len ??= bitLen(num);
  return num.toString(2).padStart(len, "0");
};

export const isEven = (num: number): boolean => (num & 1) === 0;

export const isPowerOfTwo = (num: number) => num !== 0 && !(num & (num - 1));

export const bitLen = (num: number): number => {
  let length = 0;

  while (num > 0) {
    num >>= 1;
    length++;
  }
  return length;
};

export const checkBit = (num: number, index: number) => num & (1 << index);

export const accessNBit = (num: number, index: number): number => {
  // left to right
  return (num >> (bitLen(num) - index)) & 1;
};

export const accessBit = (num: number, index: number): number => {
  // right to left (the standard way)
  return (num >> (index - 1)) & 1;
};

export const toggleBit = (num: number, index: number): number => {
  return num ^ (1 << (index - 1));
};
export const setBit = (num: number, index: number): number => {
  return num | (1 << (index - 1));
};
export const unsetBit = (num: number, index: number): number => {
  return num & ~(1 << (index - 1));
};

export const toggleValues = (
  num: number,
  val1: number,
  val2: number
): number => {
  return val1 ^ val2 ^ num;
};

// a+b = a^b + 2(a&b)
export const binAddition = (a: number, b: number) => (a ^ b) + ((a & b) << 1);
