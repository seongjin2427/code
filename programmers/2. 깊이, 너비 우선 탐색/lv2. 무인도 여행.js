function solution(maps) {
  let sum = 0;
  const result = [];
  const mapArr = maps.map((map) => map.split(""));
  const axis = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function dfs(x, y) {
    if (0 <= y && y < mapArr.length && 0 <= x && x < mapArr[0].length) {
      const target = mapArr[y][x];
      if (target !== "X") {
        mapArr[y][x] = "X";
        sum += +target;

        for (const [dx, dy] of axis) dfs(x + dx, y + dy);
      }
    }
  }

  for (let i = 0; i < mapArr.length; i++) {
    for (let j = 0; j < mapArr[0].length; j++) {
      if (mapArr[i][j] !== "X") {
        sum = 0;
        dfs(j, i);
        result.push(sum);
      }
    }
  }

  return result.length ? result.sort((prev, cur) => prev - cur) : [-1];
}

const m = ["X591X", "X1X5X", "X231X", "1XXX1"];
console.log(solution(m));
