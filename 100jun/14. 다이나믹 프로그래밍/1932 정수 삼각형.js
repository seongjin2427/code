const read = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`;

const input = read.toString().trim().split('\n');

const [T, ...cases] = input;

const dp = [];

for (let i = 0; i < cases.length; i++) {
  dp.push(cases[i].split(' ').map(Number));
}

for (let i = 1; i < +T; i++) {
  for (let j = 0; j <= i; j++) {
    let prev;
    if (j === 0) prev = dp[i - 1][j];
    else if (i === j) prev = dp[i - 1][j - 1];
    else prev = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
    dp[i][j] += prev;
  }
}

console.log(Math.max(...dp[T - 1]));
