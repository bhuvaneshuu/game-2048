import React, { useReducer, useEffect, useCallback } from 'react';
import { gameReducer, initialState } from '../state/gameReducer';
import { moveLeft, moveRight, moveUp, moveDown } from '../core/gameLogic'; // Fixed path
import ScoreBoard from '../components/ScoreBoard';
import Controls from '../components/Controls';
import Board from '../components/Board';
import DirectionButtons from '../components/DirectionButtons';
import GameOverModal from '../components/GameOverModal';
import WinModal from '../components/WinModel';

const Game2048 = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const handleMove = useCallback((moveFunc) => dispatch({ type: 'MOVE', moveFunc }), []);
  const handleRestart = () => dispatch({ type: 'RESTART' });
  const handleBoardSizeChange = (size) => dispatch({ type: 'CHANGE_BOARD_SIZE', size });
  const handleContinue = () => dispatch({ type: 'CONTINUE_GAME' });

  const handleKeyDown = useCallback((e) => {
    const keyMap = {
      ArrowLeft: moveLeft,
      ArrowRight: moveRight,
      ArrowUp: moveUp,
      ArrowDown: moveDown,
    };
    if (keyMap[e.key]) {
      e.preventDefault();
      handleMove(keyMap[e.key]);
    }
  }, [handleMove]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-2">2048</h1>
          <p className="text-gray-600">Join tiles to reach 2048!</p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-6 mb-4">
          <div className="flex justify-between items-center mb-4">
            <ScoreBoard score={state.score} />
            <Controls 
              boardSize={state.boardSize}
              onBoardSizeChange={handleBoardSizeChange}
              onRestart={handleRestart}
            />
          </div>

          <Board board={state.board} boardSize={state.boardSize} />

          <div className="mt-4 text-sm text-gray-600 text-center">
            Use arrow keys ← ↑ → ↓ to play
          </div>
        </div>

        <DirectionButtons onMove={handleMove} />

        {state.gameOver && <GameOverModal score={state.score} onRestart={handleRestart} />}
        {state.showWinModal && <WinModal score={state.score} onContinue={handleContinue} onRestart={handleRestart} />}
      </div>
    </div>
  );
};

export default Game2048;