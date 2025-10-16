import React, { useReducer, useEffect, useCallback } from 'react';
import { gameReducer, initialState } from '../state/gameReducer';
import { moveLeft, moveRight, moveUp, moveDown } from '../core/gameLogic';
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

  const handleKeyDown = useCallback(
    (e) => {
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
    },
    [handleMove]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            2048
          </h1>
          <p className="text-gray-600 text-lg tracking-wide">
            Merge tiles & reach the magic number!
          </p>
        </div>

        {/* Game Container */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 mb-6 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <ScoreBoard score={state.score} />
            <Controls
              boardSize={state.boardSize}
              onBoardSizeChange={handleBoardSizeChange}
              onRestart={handleRestart}
            />
          </div>

          {/* Board */}
          <Board board={state.board} boardSize={state.boardSize} />

          <div className="mt-4 text-sm text-gray-600 text-center">
            Use <span className="font-semibold text-indigo-600">← ↑ → ↓</span> keys or buttons below to move tiles
          </div>
        </div>

        {/* Direction Buttons */}
        <div className="flex justify-center mt-4">
          <DirectionButtons onMove={handleMove} />
        </div>

        {/* Modals */}
        {state.gameOver && (
          <GameOverModal
            score={state.score}
            onRestart={handleRestart}
          />
        )}

        {state.showWinModal && (
          <WinModal
            score={state.score}
            onContinue={handleContinue}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};

export default Game2048;
