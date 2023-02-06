const read = `6
6
10
13
9
8
1`;

const input = read.toString().trim().split("\n").map(Number);

const n = input.shift();

console.log(n, input);

const dp = new Array(n).fill(0);

dp[1] = input[0];
dp[2] = input[0] + input[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 3] + input[i - 1] + input[i - 2],
    dp[i - 2] + input[i - 1]
  );
}

console.log(dp[n]);
