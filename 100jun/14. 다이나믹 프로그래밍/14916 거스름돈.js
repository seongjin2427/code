const read = `13`;

const input = read.toString().trim();

const dp = new Array(100001).fill(Number.MAX_VALUE);
dp[2] = dp[5] = 1;
dp[4] = 2;

for (let i = 6; i <= +input; i++) {
  dp[i] = Math.min(dp[i - 2], dp[i - 5]) + 1;
}

console.log(dp[+input] === Number.MAX_VALUE ? -1 : dp[+input]);
