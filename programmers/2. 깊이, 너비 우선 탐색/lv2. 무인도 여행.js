function solution(maps) {
  let sum = 0;
  const result = [];
  const visited = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(false)
  );

  function dfs(x, y) {
    if (0 <= y && y < maps.length && 0 <= x && x < maps[0].length) {
      const target = maps[y][x];
      if (target !== "X" && !visited[y][x]) {
        visited[y][x] = true;
        sum += +target;
        dfs(x + 1, y, sum);
        dfs(x, y + 1, sum);
        dfs(x - 1, y, sum);
        dfs(x, y - 1, sum);
      }
    }
  }

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        sum = 0;
        dfs(j, i);
        result.push(sum);
      }
    }
  }

  if (!result.length) return [-1];
  return result.sort((prev, cur) => prev - cur);
}

const m = ["X591X", "X1X5X", "X231X", "1XXX1"];
console.log(solution(m));
