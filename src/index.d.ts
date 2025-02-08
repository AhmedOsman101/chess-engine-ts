export type GameState = {
  board: number[];
  turn: Turn;
  castling: string;
  enPassant: string;
  halfMoves: number;
  fullMoves: number;
};

export type Keys<T> = keyof T;
export type Values<T> = T[Keys<T>];

export type Turn = "w" | "b";
