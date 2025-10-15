import { initializeBoard } from "../core/gameLogic";

export const initialState = {
  boardSize: 4,
  board: initializeBoard(4),
  score: 0,
  gameOver: false,
  won: false,
  showWinModal: false,
};
