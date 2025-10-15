import React from 'react';

const Tile = ({ value, size }) => {
  const colors = {
    0: 'bg-gray-200',
    2: 'bg-amber-100',
    4: 'bg-amber-200',
    8: 'bg-orange-300',
    16: 'bg-orange-400',
    32: 'bg-orange-500',
    64: 'bg-red-400',
    128: 'bg-yellow-400',
    256: 'bg-yellow-500',
    512: 'bg-yellow-600',
    1024: 'bg-yellow-700',
    2048: 'bg-yellow-800',
  };
  const textColor = value > 4 ? 'text-white' : 'text-gray-700';
  const cellSize = size === 4 ? 'w-24 h-24 text-3xl' : size === 5 ? 'w-20 h-20 text-2xl' : 'w-16 h-16 text-xl';
  
  return (
    <div className={`${cellSize} ${colors[value] || 'bg-purple-600'} ${textColor} rounded-lg flex items-center justify-center font-bold`}>
      {value !== 0 && value}
    </div>
  );
};

export default Tile;
