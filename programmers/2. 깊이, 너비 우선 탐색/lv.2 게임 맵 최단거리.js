function solution(maps) {
  const move = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [x, y, count] = queue.shift();

    move.forEach(([dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < maps[0].length &&
        ny < maps.length &&
        maps[ny][nx] === 1
      ) {
        maps[ny][nx] = 0;
        queue.push([nx, ny, count + 1]);
      }
    });

    if (y === maps.length - 1 && x === maps[0].length - 1) {
      return count;
    }
  }

  return -1;
}

const m = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

console.log(solution(m));
