const read = `6 8
1 2
2 5
5 1
3 4
4 6
5 4
2 4
2 3`;

const [input, ...inputs] = read.toString().trim().split('\n');
const [N, M] = input.split(' ').map((v) => +v);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N + 1).fill(false);
let count = 0;

for (let i = 0; i < inputs.length; i++) {
  let [v1, v2] = inputs[i].split(' ').map((v) => +v);
  graph[v1].push(v2);
  graph[v2].push(v1);
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    DFS(i);
    count++;
  }
}

function DFS(v) {
  if (visited[v] === true) return;
  visited[v] = true;
  for (let i = 0; i < graph[v].length; i++) {
    if (visited[graph[v][i]] === false) {
      DFS(graph[v][i]);
    }
  }
}

console.log(count);
