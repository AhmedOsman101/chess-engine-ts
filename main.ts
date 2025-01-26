class Piece {
  public static None: number = 0 as const;
  public static King: number = 1 as const;
  public static Pawn: number = 2 as const;
  public static Knight: number = 3 as const;
  public static Bishop: number = 4 as const;
  public static Rook: number = 5 as const;
  public static Queen: number = 6 as const;

  // The first 2-bits of a number represents its color
  public static White: number = 8 as const;
  public static Black: number = 16 as const;

  protected constructor() {}
}
