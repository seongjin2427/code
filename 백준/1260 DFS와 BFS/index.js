const read = `4 5 1
1 2
1 3
1 4
2 4
3 4`;

const input = read.toString().trim().split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);
const vertexs = [...Array(N + 1)].map(() => []);
const visited = Array(N + 1).fill(0);

let v1, v2;
input.forEach((i) => {
  [v1, v2] = i.split(' ').map(Number);
  vertexs[v1].push(v2);
  vertexs[v2].push(v1);
});

vertexs.forEach((el) => {
  el.sort((a, b) => a - b);
});

const answer = [[V], [V]];
const stack = [];

function dfs(v) {
  if (visited[v]) return;
  visited[v] = 1;
  stack.push(v);

  vertexs.forEach((_, idx) => {
    let next = vertexs[v][idx];
    if (visited[next] === 0) {
      dfs(next);
    }
  });
}

const answer_bfs = [];
function bfs(v) {
  let queue = [v];
  let x;
  while (queue.length) {
    x = queue.shift();
    if (visited[x]) continue;
    visited[x] = 1;
    answer_bfs.push(x);
    vertexs.forEach((_, idx) => {
      let next = vertexs[x][idx];
      if (visited[next] === 0) {
        queue.push(next);
      }
    });
  }
}

dfs(V);
console.log(stack);

visited.fill(0);
bfs(V);
console.log(answer_bfs);
