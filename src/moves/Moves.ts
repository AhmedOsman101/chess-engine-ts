export const ROOK_OFFSETS = [-8, -1, 1, 8] as const;
export const BISHOP_OFFSETS = [-9, -7, 7, 9] as const;
// First 4 are orthogonal, last 4 are diagonals (N, S, W, E, NW, SE, NE, SW)
export const QUEEN_OFFSETS = [8, -8, -1, 1, 7, -7, 9, -9] as const;

const numSquaresToEdge: number[][] = [];

export const precomputedMoveData = (): number[][] => {
  for (let col = 0; col < 8; col++) {
    for (let row = 0; row < 8; row++) {
      const numUp = 7 - row;
      const numDown = row;
      const numLeft = col;
      const numRight = 7 - col;

      const squareIndex = row * 8 + col;

      numSquaresToEdge[squareIndex] = [
        numUp,
        numDown,
        numLeft,
        numRight,
        Math.min(numUp, numLeft),
        Math.min(numDown, numRight),
        Math.min(numUp, numRight),
        Math.min(numDown, numLeft),
      ];
    }
  }
  return numSquaresToEdge;
};

export type Move = { startSquare: number; endSquare: number };

export let Moves: Move[];

export const generateMoves = (): Move[] => {
  const moves: Move[] = [];
  for (let i = 0; i < 64; i++) {
    // const piece =
  }
  return moves;
};
