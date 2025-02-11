import type { GameState } from "../index.d.ts";
import { parseFen } from "./Notation.ts";

export const START_FEN: string =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1" as const;

export const INITIAL_GAME_STATE: GameState = {
  ...parseFen(START_FEN),
} as const;

export const PORT = 5000 as const;

export const HOST = "0.0.0.0" as const;
