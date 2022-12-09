const read = `9`;

const input = +read.toString().trim();

const dp = new Array(1001);
dp[0] = 1;
dp[1] = 2;
dp[2] = 3;

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[input - 1]);
