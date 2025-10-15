import { initializeBoard, addRandomTile, boardsEqual, canMove, hasWon } 
from '../core/gameLogic.js';

export const initialState = {
  boardSize: 4,
  board: initializeBoard(4),
  score: 0,
  gameOver: false,
  won: false,
  showWinModal: false,
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'MOVE': {
      if (state.gameOver || state.showWinModal) return state;

      const { board: newBoard, score: moveScore } = action.moveFunc(state.board);
      if (boardsEqual(state.board, newBoard)) return state;

      const boardWithNewTile = addRandomTile(newBoard);
      const newScore = state.score + moveScore;
      const justWon = hasWon(boardWithNewTile) && !state.won;
      const isGameOver = !canMove(boardWithNewTile);

      return {
        ...state,
        board: boardWithNewTile,
        score: newScore,
        won: state.won || justWon,
        showWinModal: justWon,
        gameOver: isGameOver,
      };
    }

    case 'RESTART':
      return { ...initialState, board: initializeBoard(state.boardSize), boardSize: state.boardSize };

    case 'CHANGE_BOARD_SIZE':
      return { ...initialState, boardSize: action.size, board: initializeBoard(action.size) };

    case 'CONTINUE_GAME':
      return { ...state, showWinModal: false };

    default:
      return state;
  }
};
