import React from 'react';
import { RotateCcw } from 'lucide-react';

const Controls = ({ boardSize, onBoardSizeChange, onRestart }) => (
  <div className="flex gap-2">
    <select
      value={boardSize}
      onChange={(e) => onBoardSizeChange(Number(e.target.value))}
      className="px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium"
    >
      {[3,4,5,6].map(size => <option key={size} value={size}>{size}x{size}</option>)}
    </select>

    <button
      onClick={onRestart}
      className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
    >
      <RotateCcw size={18} /> New Game
    </button>
  </div>
);

export default Controls;
