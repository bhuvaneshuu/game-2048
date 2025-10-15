import React from 'react';
import { moveLeft, moveRight, moveUp, moveDown } from "../core/gameLogic";

const DirectionButtons = ({ onMove }) => {
  const buttons = [
    { label: '← Left', func: moveLeft },
    { label: '↑ Up', func: moveUp },
    { label: '↓ Down', func: moveDown },
    { label: '→ Right', func: moveRight },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {buttons.map(({ label, func }) => (
        <button
          key={label}
          onClick={() => onMove(func)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-semibold transition"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default DirectionButtons;
