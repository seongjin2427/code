const read = `4 2`;

const [N, M] = read.toString().trim().split(' ').map(Number);

const solution = (n, m) => {
  let answer = [];
  let tmp = [];
  const visited = new Array(n + 1).fill(0);
  function dfs(s, cnt) {
    if (cnt === m) {
      answer.push(tmp.join(' '));
    } else {
      for (let i = s; i <= n; i++) {
        if (!visited[i]) {
          visited[i] = 1;
          tmp.push(i);
          dfs(i, tmp.length);
          visited[i] = 0;
          tmp.pop();
        }
      }
    }
  }
  dfs(1, 0);
  return answer.join('\n');
};

console.log(solution(N, M));
