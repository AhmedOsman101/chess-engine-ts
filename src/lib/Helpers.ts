import { PieceChars } from "../board/Piece.ts";

export const getUnique = (arr: number[]): number | undefined => {
  let zeroCount = 0;
  const unique = arr.reduce((a, b) => {
    if (b === 0) zeroCount++;
    return a ^ b;
  });
  if (zeroCount > 1 && unique === 0) return undefined;

  return unique;
};

// Function to generate random integers within a range
export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getChar = (index: number): string => String.fromCharCode(index);
export const char2num = (char: string): number => char.charCodeAt(0);

export const isNumber = (value: string | number) => !Number.isNaN(+value);

export function* range(
  start = 0,
  end = Number.POSITIVE_INFINITY,
  step = 1
): Generator<number, void, unknown> {
  let i = start;
  while (i !== end) {
    yield i;
    i += step;
  }
}

export function printBoard(arr: Array<number>): void {
  const lightSquare = ""; // U+0020 SPACE
  const darkSquare = "󰝤"; //   U+2588 FULL BLOCK
  const squareColor = (i: number) => (i % 2 === 0 ? lightSquare : darkSquare);
  const pieces = {
    R: "♜",
    N: "♞",
    B: "♝",
    Q: "♛",
    K: "♚",
    P: "♟︎", // White pieces (Unicode chess symbols)
    r: "♖",
    n: "♘",
    b: "♗",
    q: "♕",
    k: "♔",
    p: "♙", // Black pieces (Unicode chess symbols)
  };

  for (let i = 0; i < arr.length; i += 8) {
    const row = 8 - i / 8;
    const line = arr
      .toReversed()
      .slice(i, i + 8)
      .map((cell, col) => {
        const piece = PieceChars[cell];
        return piece ? pieces[piece] : squareColor(col + row);
      });
    console.log(`${row} |`, line.join(" "));
  }
  console.log("   -----------------");
  console.log("    A B C D E F G H");
}
