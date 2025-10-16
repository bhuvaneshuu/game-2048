import React from 'react';
import { Trophy } from 'lucide-react';

const WinModal = ({ score, onContinue, onRestart }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-gradient-to-br from-amber-100 to-yellow-200 rounded-2xl p-8 max-w-md text-center shadow-2xl">
    <Trophy size={64} className="mx-auto text-amber-500 mb-4" />
    <h2 className="text-3xl font-bold text-amber-800 mb-2">You Win!</h2>
    <p className="text-amber-700 mb-2">You reached 2048!</p>
    <p className="text-2xl font-bold text-yellow-600 mb-6">Score: {score}</p>
    <div className="flex gap-3 justify-center">
      <button
        onClick={onContinue}
        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Keep Playing
      </button>
      <button
        onClick={onRestart}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        New Game
      </button>
    </div>
  </div>
</div>
);

export default WinModal;