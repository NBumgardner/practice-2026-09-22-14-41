export const TicTacToe = {
  setup: () => ({ cells: Array(9).fill(null) }),

  moves: {
    clickCell: ({ G, playerID }: Record<string, unknown>, id: unknown) => {
      ((G as Record<string, unknown>).cells as Record<string, unknown>)[
        id as any
      ] = playerID;
    },
  },
};
