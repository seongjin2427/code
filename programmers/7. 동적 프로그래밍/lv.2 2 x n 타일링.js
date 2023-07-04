function solution(n) {
  const arr = [1n, 1n];
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1_000_000_007n;
  }

  return +arr[n].toString();
}

const n = 4;

console.log(solution(n));
