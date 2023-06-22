function solution(N, road, K) {
  let result = new Set([1]);
  const town = {};
  const visited = new Array(N + 1).fill(false);
  visited[1] = true;

  road.forEach((bridge) => {
    const [currentTown, nextTown, time] = bridge;
    if (!town[currentTown]) town[currentTown] = [];
    if (!town[nextTown]) town[nextTown] = [];
    town[currentTown].push([nextTown, time]);
    town[nextTown].push([currentTown, time]);
  });

  const dfs = (bridge, time, visitedTown) => {
    const [currentTown, currentTime] = bridge;
    time += currentTime;
    if (time <= K && !visitedTown[currentTown]) {
      result.add(currentTown);
      visitedTown[currentTown] = true;

      for (const nextBridge of town[currentTown]) {
        dfs(nextBridge, time, visitedTown);
      }
      visitedTown[currentTown] = false;
    }
    time -= currentTime;
  };

  for (const currentTown of town["1"]) {
    dfs(currentTown, 0, visited);
  }

  return result.size;
}

const n = 5;
const r = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
const k = 3;

console.log(solution(n, r, k));
