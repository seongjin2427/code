const n = 3;
const computers = [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
];

function solution(n, computers) {
  let answer = 0;
  let visited = [false];

  const dfs = (node) => {
    visited[node] = true;
    computers.forEach((relation, adjNode) => {
      if (relation[node] && !visited[adjNode]) {
        dfs(adjNode);
      }
    });
  };

  computers.forEach((_, node) => {
    if (!visited[node]) {
      dfs(node);
      answer++;
    }
  });

  return answer;
}

console.log("answer", solution(n, computers));
