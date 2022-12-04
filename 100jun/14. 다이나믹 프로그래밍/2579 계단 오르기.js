const read = `6
10
20
15
25
10
20`;

const [N, ...arr] = read.toString().trim().split('\n').map(Number);

const dp = new Array(N).fill(0);

dp[0] = arr[0];
dp[1] = Math.max(arr[0] + arr[1], arr[1]);
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
}

console.log(dp[N - 1]);

// 실패
// const [N, ...steps] = read.toString().trim().split('\n').map(Number);

// function solution(stairs) {
//   let sum = 0;

//   if (stairs.length < 3) {
//     sum += stairs.reduce((a, b) => a + b, 0);
//     return sum;
//   }

//   let select = stairs[0] + stairs[1] >= stairs[0] + stairs[2] ? 0 : 2;

//   function step(cur) {
//     sum += stairs[cur];

//     if (cur === N - 1) return;
//     let s;
//     let arr = [cur + 1, cur + 2];

//     if (cur === N - 2) arr[1] = cur + 1;
//     else if (cur === N - 3) arr[0] = cur + 2;

//     s =
//       stairs[cur] + stairs[arr[0]] >= stairs[cur] + stairs[arr[1]]
//         ? arr[0]
//         : arr[1];

//     return step(s);
//   }

//   step(select);
//   return sum;
// }

// const result = solution(steps);
// console.log(result);
