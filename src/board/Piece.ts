import type { Keys } from "../index.d.ts";
export const Piece = {
  None: 0,
  King: 1,
  Pawn: 2,
  Knight: 3,
  Bishop: 4,
  Rook: 5,
  Queen: 6,

  // The first 2-bits of a piece represents its color
  White: 8,
  Black: 16,
} as const;

export const CharPiece = {
  // white pieces
  K: Piece.White | Piece.King,
  P: Piece.White | Piece.Pawn,
  N: Piece.White | Piece.Knight,
  B: Piece.White | Piece.Bishop,
  R: Piece.White | Piece.Rook,
  Q: Piece.White | Piece.Queen,
  // black pieces
  k: Piece.Black | Piece.King,
  p: Piece.Black | Piece.Pawn,
  n: Piece.Black | Piece.Knight,
  b: Piece.Black | Piece.Bishop,
  r: Piece.Black | Piece.Rook,
  q: Piece.Black | Piece.Queen,
} as const;

export type PieceChar = Keys<typeof CharPiece>;

export const PieceChars = Object.fromEntries(
  Object.entries(CharPiece).map(([key, value]) => [value, key])
) as Record<number, PieceChar>;
