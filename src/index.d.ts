export type Keys<T> = keyof T;
export type Values<T> = T[Keys<T>];

export type Turn = "w" | "b";

export type GameState = {
  board: number[];
  turn: Turn;
  castling: string;
  enPassant: string;
  halfMoves: number; // half-moves since last capture or pawn advance
  fullMoves: number; // the total number of moves made in the game
};
