function solution(n) {
  const arr = [0, 1, 2].map(BigInt);
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return +(arr[n] % 1234567n).toString();
}

const n = 2000;
console.log(solution(n));
