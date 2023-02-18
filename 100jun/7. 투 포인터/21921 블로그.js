const read = `5 2
1 4 2 5 1`;

// 21921

const input = read
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, X] = input.shift();
const visited = input[0];

function solution(N, X, visited) {
  let [max, day, total] = [0, 1, 0];
  for (let i = 0; i < X; i++) total += visited[i];

  max = Math.max(max, total);

  for (let j = 1; j <= N - X; j++) {
    total -= visited[j - 1];
    total += visited[j + X - 1];

    if (total === max) day += 1;
    else {
      if (total > max) day = 1;
      max = Math.max(total, max);
    }
  }
  return [max, day];
}

const result = solution(N, X, visited);
result[0] === 0 ? console.log("SAD") : result.map((v) => console.log(v));
