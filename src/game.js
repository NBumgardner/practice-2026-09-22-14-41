import { INVALID_MOVE } from 'boardgame.io/core';

const board_height_in_bounds = 3;
const board_height_out_bounds_half = 1;
const board_height_out_bounds = board_height_out_bounds_half * 2;
const board_height = board_height_in_bounds + board_height_out_bounds;

const board_width_in_bounds_half = 6;
const board_width_out_bounds_half = 1;
const board_width_half =
  board_width_in_bounds_half + board_width_out_bounds_half;
const board_width = board_width_half * 2;

const board_area = board_width * board_height;

const characters_per_player = 6;

export const VolleyballReturns = {
  setup: () => ({ cells: Array(board_area).fill(null) }),

  moves: {
    moveCellContents: ({ G, playerID }, idOrigin, idDestination) => {
      if (idOrigin === idDestination
        || G.cells[idOrigin] === null
        || G.cells[idDestination]) {
        return INVALID_MOVE;
      }

      G.cells[idOrigin] = null;
      G.cells[idDestination] = playerID;
    },
    setupCharacterInEmptyCell: ({ G, playerID }, id) => {
      if (G.cells[id] !== null) {
        return INVALID_MOVE;
      }

      G.cells[id] = playerID;
    },
  },
};
