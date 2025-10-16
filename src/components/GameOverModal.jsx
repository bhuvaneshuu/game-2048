import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const GameOverModal = ({ score, onRestart }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === 'Escape') onRestart();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onRestart]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md text-center">
        <X size={64} className="mx-auto text-rose-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Game Over!</h2>
        <p className="text-gray-600 mb-2">No more moves available</p>
        <p className="text-2xl font-bold text-purple-600 mb-6">Final Score: {score}</p>
        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
