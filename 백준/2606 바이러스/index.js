const read = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`;

const input = read.toString().trim().split('\n');

const total = +input.shift();
const pair = input.shift();

const graph = [...Array(total + 1)].map(() => []);
const visited = Array(total + 1).fill(false);

let v1, v2;

input.forEach((str) => {
  [v1, v2] = str.split(' ').map(Number);
  graph[v1].push(v2);
  graph[v2].push(v1);
});

console.log(graph);

let result = 0;

const dfs = (v) => {
  if (visited[v]) return;
  visited[v] = true;
  result++;
  graph[v].forEach((vertex) => {
    if (!visited[vertex]) dfs(vertex);
  });
};

dfs(1);

console.log(result - 1);
