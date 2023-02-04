const read = `2
3
12`;

const [n, ...cases] = read.toString().trim().split("\n");

const tests = cases.map(Number);

for (const test of tests) {
  console.log(solve(test));
}

function solve(n) {
  const dp = [1, 1, 1, 1, 2];
  if (n < 4) return dp[n];

  for (let i = 3; i < n; i++) {
    dp[i] = dp[i - 3] + dp[i - 2];
  }

  return dp[n - 1];
}
