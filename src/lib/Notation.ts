import { CharPiece, Piece, type PieceChar } from "../board/Piece.ts";
import type { GameState, Turn } from "../index.d.ts";
import { isNumber, printBoard } from "./Helpers.ts";

export const parseFen = (fen: string): GameState => {
  const board: number[] = new Array(64);

  let col = 0;

  const [position, turn, castling, enPassant, halfMoves, fullMoves] =
    fen.split(" ");

  position.split("/").forEach((line, row) => {
    col = 0;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const cellIndex = (7 - row) * 8 + col;

      if (isNumber(char)) {
        board.fill(Piece.None, cellIndex, cellIndex + +char);
        col += +char;
      } else {
        board[cellIndex] = CharPiece[char as PieceChar];
        col++;
      }
    }
  });

  return {
    board,
    turn: turn as Turn,
    castling,
    enPassant,
    halfMoves: +halfMoves,
    fullMoves: +fullMoves,
  };
};

printBoard(
  parseFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1").board
);
