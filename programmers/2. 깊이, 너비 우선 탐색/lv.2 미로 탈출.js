function solution(maps) {
  let time = 0;
  const visitedForLever = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(-1)
  );
  const visitedForEnd = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(-1)
  );
  const move = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const startPoint = [];
  const leverPoint = [];
  maps.forEach((row, rowIndex) => {
    const startColumnIndex = row.indexOf("S");
    const leverColumnIndex = row.indexOf("L");
    if (startColumnIndex >= 0) startPoint.push(rowIndex, startColumnIndex);
    if (leverColumnIndex >= 0) leverPoint.push(rowIndex, leverColumnIndex);
  });
  [startRow, startColumn] = startPoint;
  [leverRow, leverColumn] = leverPoint;

  const bfs = (y, x, count, visitedMap, endPoint) => {
    const queue = [[y, x, count]];

    while (queue.length) {
      const [dy, dx, currentCount] = queue.shift();

      if (
        dx >= 0 &&
        dy >= 0 &&
        dx < maps[0].length &&
        dy < maps.length &&
        maps[dy][dx] !== "X" &&
        visitedMap[dy][dx] < 0
      ) {
        visitedMap[dy][dx] = currentCount + 1;
        if (maps[dy][dx] === endPoint) {
          time += currentCount;
          break;
        }
        for (const [my, mx] of move) {
          queue.push([dy + my, dx + mx, currentCount + 1]);
        }
      }
    }
  };

  bfs(startRow, startColumn, 0, visitedForLever, "L");
  if (!time) return -1;

  const temp = time;
  bfs(leverRow, leverColumn, 0, visitedForEnd, "E");
  if (temp === time) return -1;

  return time;
}

const m = ["LOOXS", "OOOOO", "OOOOO", "OOOOO", "EOOOO"];
console.log(solution(m));
