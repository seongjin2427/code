const read = `6
3 5 7 9 2 1 4 8`;

const [A, nums] = read.toString().trim().split('\n');

const numbers = nums.split(' ').map((v) => +v);
const dp = new Array(A).fill(0);

for (let i = 0; i < A; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j] && dp[j] > max) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));
