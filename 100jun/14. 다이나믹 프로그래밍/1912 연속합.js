const read = `5
-1 -2 -3 -4 -5`;

const [n, num] = read.toString().trim().split("\n");

const numbers = num.split(" ").map(Number);

const dp = [];
let max = -Infinity;

for (let i = 0; i < n; i++) {
  dp[i] = numbers[i];
  let next = dp[i - 1] + numbers[i];

  if (dp[i] < next) dp[i] = next;
  if (max < dp[i]) max = dp[i];
}

console.log(max);
