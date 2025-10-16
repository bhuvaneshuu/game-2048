import React from 'react';
import { RotateCcw } from 'lucide-react';

const Controls = ({ boardSize, onBoardSizeChange, onRestart }) => (
  <div className="flex gap-2">
    <select
  value={boardSize}
  onChange={(e) => onBoardSizeChange(Number(e.target.value))}
  className="px-3 py-2 bg-amber-100 rounded-lg text-sm font-medium"
>
  {[3,4,5,6].map(size => <option key={size} value={size}>{size}x{size}</option>)}
</select>

<button
  onClick={onRestart}
  className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition shadow-md"
>
  <RotateCcw size={18} /> New Game
</button>

  </div>
);

export default Controls;