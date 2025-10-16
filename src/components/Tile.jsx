import React from 'react';

const Tile = ({ value, size }) => {
const colors = {
  0: 'bg-[#cdc1b4]',
  2: 'bg-[#eee4da]',
  4: 'bg-[#ede0c8]',
  8: 'bg-[#f2b179]',
  16: 'bg-[#f59563]',
  32: 'bg-[#f67c5f]',
  64: 'bg-[#f65e3b]',
  128: 'bg-[#edcf72]',
  256: 'bg-[#edcc61]',
  512: 'bg-[#edc850]',
  1024: 'bg-[#edc53f]',
  2048: 'bg-[#edc22e]',
};
  const textColor = value > 4 ? 'text-white' : 'text-gray-800';
  const cellSize = size === 4 ? 'w-24 h-24 text-3xl' : size === 5 ? 'w-20 h-20 text-2xl' : 'w-16 h-16 text-xl';
  
  return (
    <div className={`${cellSize} ${colors[value] || 'bg-purple-700'} ${textColor} rounded-lg flex items-center justify-center font-bold`}>
      {value !== 0 && value}
    </div>
  );
};

export default Tile;