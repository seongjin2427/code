function solution(board, moves) {
  const rotateBoard = board.map((line, i) => {
    return line
      .map((_, j) => {
        return board[j][i];
      })
      .filter((v) => v);
  });

  let answer = 0;
  const stack = [];

  moves
    .map((m) => m - 1)
    .forEach((m) => {
      const targetArray = rotateBoard[m];
      if (!targetArray.length) return;

      const target = targetArray.shift();
      if (stack[stack.length - 1] !== target) return stack.push(target);

      stack.pop();
      answer += 2;
    });

  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
