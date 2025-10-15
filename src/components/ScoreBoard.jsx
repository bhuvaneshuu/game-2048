import React from 'react';

const ScoreBoard = ({ score }) => (
  <div className="bg-amber-500 text-white px-6 py-3 rounded-lg">
    <div className="text-xs font-semibold uppercase">Score</div>
    <div className="text-2xl font-bold">{score}</div>
  </div>
);

export default ScoreBoard;
