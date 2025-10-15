import React from 'react';
import { Trophy } from 'lucide-react';

const WinModal = ({ score, onContinue, onRestart }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 max-w-md text-center">
      <Trophy size={64} className="mx-auto text-yellow-500 mb-4" />
      <h2 className="text-3xl font-bold text-gray-800 mb-2">You Win!</h2>
      <p className="text-gray-600 mb-2">You reached 2048!</p>
      <p className="text-2xl font-bold text-amber-600 mb-6">Score: {score}</p>
      <div className="flex gap-3 justify-center">
        <button
          onClick={onContinue}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Keep Playing
        </button>
        <button
          onClick={onRestart}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          New Game
        </button>
      </div>
    </div>
  </div>
);

export default WinModal;
