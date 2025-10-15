export const createEmptyBoard = (size) => Array(size).fill(null).map(() => Array(size).fill(0));

export const getRandomEmptyCell = (board) => {
  const empty = [];
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === 0) empty.push({ i, j });
    });
  });
  return empty.length > 0 ? empty[Math.floor(Math.random() * empty.length)] : null;
};

export const addRandomTile = (board) => {
  const cell = getRandomEmptyCell(board);
  if (!cell) return board;
  
  const newBoard = board.map(row => [...row]);
  newBoard[cell.i][cell.j] = Math.random() < 0.9 ? 2 : 4;
  return newBoard;
};

export const initializeBoard = (size) => {
  let board = createEmptyBoard(size);
  board = addRandomTile(board);
  board = addRandomTile(board);
  return board;
};

export const slideRow = (row) => {
  const filtered = row.filter(cell => cell !== 0);
  const merged = [];
  let score = 0;
  let skip = false;
  
  for (let i = 0; i < filtered.length; i++) {
    if (skip) { skip = false; continue; }
    if (i < filtered.length - 1 && filtered[i] === filtered[i + 1]) {
      merged.push(filtered[i] * 2);
      score += filtered[i] * 2;
      skip = true;
    } else {
      merged.push(filtered[i]);
    }
  }
  while (merged.length < row.length) merged.push(0);
  return { row: merged, score };
};

export const rotateBoard = (board) => {
  const size = board.length;
  return board[0].map((_, i) => board.map(row => row[i]).reverse());
};

export const moveLeft = (board) => {
  let totalScore = 0;
  const newBoard = board.map(row => {
    const { row: newRow, score } = slideRow(row);
    totalScore += score;
    return newRow;
  });
  return { board: newBoard, score: totalScore };
};

export const moveRight = (board) => {
  const rotated = rotateBoard(rotateBoard(board));
  const { board: moved, score } = moveLeft(rotated);
  return { board: rotateBoard(rotateBoard(moved)), score };
};

export const moveUp = (board) => {
  const rotated = rotateBoard(rotateBoard(rotateBoard(board)));
  const { board: moved, score } = moveLeft(rotated);
  return { board: rotateBoard(moved), score };
};

export const moveDown = (board) => {
  const rotated = rotateBoard(board);
  const { board: moved, score } = moveLeft(rotated);
  return { board: rotateBoard(rotateBoard(rotateBoard(moved))), score };
};

export const boardsEqual = (b1, b2) => b1.every((r, i) => r.every((c, j) => c === b2[i][j]));
export const hasWon = (b) => b.some(row => row.some(cell => cell === 2048));

export const canMove = (board) => {
  if (board.some(row => row.some(cell => cell === 0))) return true;
  for (let i = 0; i < board.length; i++)
    for (let j = 0; j < board.length - 1; j++)
      if (board[i][j] === board[i][j + 1]) return true;
  for (let i = 0; i < board.length - 1; i++)
    for (let j = 0; j < board.length; j++)
      if (board[i][j] === board[i + 1][j]) return true;
  return false;
};
