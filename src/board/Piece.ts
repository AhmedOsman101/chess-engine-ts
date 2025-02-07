export enum Piece {
  None = 0,
  King = 1,
  Pawn = 2,
  Knight = 3,
  Bishop = 4,
  Rook = 5,
  Queen = 6,

  // The first 2-bits of a piece represents its color
  White = 8,
  Black = 16,
}
