import React from 'react';
import Tile from './Tile';

const Board = ({ board, boardSize }) => (
  <div className="bg-amber-700 rounded-xl p-4 inline-block">
    <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))` }}>
      {board.map((row, i) =>
        row.map((cell, j) => <Tile key={`${i}-${j}`} value={cell} size={boardSize} />)
      )}
    </div>
  </div>
);

export default Board;
