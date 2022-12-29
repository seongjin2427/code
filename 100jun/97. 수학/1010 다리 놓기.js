const read = `3
2 2
1 5
13 29`;

const [T, ...input] = read.toString().trim().split('\n');

const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

const solution = (n1, n2) => {
  return factorial(n2) / (factorial(n1) * factorial(n2 - n1));
};

input.forEach((n) => {
  const [a, b] = n.split(' ').map((v) => +v);
  console.log(a === b ? 1 : Math.round(solution(a, b)));
});

// function bridge(k, n) {
//   let dp = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));

//   dp[0][0] = 1;
//   dp[1][0] = 1;
//   dp[1][1] = 1;

//   for (let i = 2; i <= n; i++) {
//     for (let j = 0; j <= i; j++) {
//       if (j == 0 || j == i) {
//         dp[i][j] = 1;
//       } else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
//     }
//   }
//   console.log(dp[n][k]);
// }

// input
//   .map((v) => v.split(' ').map((x) => +x))
//   .forEach((y) => {
//     bridge(y[0], y[1]);
//   });
