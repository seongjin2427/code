const read = `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`;

const input = read.toString().trim().split('\n');
const T = +input.shift();
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const answer = [];

let M, N, K, map, located, count;
while (input.length) {
  count = 0;
  [M, N, K] = input.shift().split(' ').map(Number);

  map = [...Array(N)].map(() => [...Array(M)].map(() => 0));

  located = input.splice(0, K).map((i) => i.split(' ').map(Number));
  located.forEach(([x, y]) => {
    map[y][x] = 1;
  });

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] === 1) {
        dfs(j, i);
        count++;
      }
    }
  }
  answer.push(count);

  function dfs(x, y) {
    if (!rangeCheck(y, x) || map[y][x] === 0) return;
    map[y][x] = 0;
    for (let k = 0; k < dy.length; k++) {
      dfs(x + dx[k], y + dy[k]);
    }
  }

  function rangeCheck(i, j) {
    if (i >= 0 && j >= 0 && i < N && j < M) return true;
    else false;
  }
}

console.log(answer.join('\n'));
