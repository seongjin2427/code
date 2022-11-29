const read = `9 23
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBW`;

let input = read.toString().trim().split('\n');

let [N, M] = input.shift().split(' ').map(Number);

const board = input.map((v) => v.split(''));
let min = Infinity;

let black = [],
  white = [];
let boards = ['BWBWBWBW', 'WBWBWBWB'];
for (let i = 0; i < 8; i++) {
  black.push(boards[i % 2]);
  white.push(boards[1 - (i % 2)]);
}

function checkMin(x, y) {
  let whiteCount = 0;
  let blackCount = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (board[i][j] !== white[i - y][j - x]) whiteCount++;
      if (board[i][j] !== black[i - y][j - x]) blackCount++;
    }
  }

  min = Math.min(min, whiteCount, blackCount);
}

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    checkMin(j, i);
  }
}

console.log(min);
