function solution(n) {
  const arr = [BigInt(0), BigInt(1)];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }

  return +(arr[n] % BigInt(1234567)).toString();
}

const n = 100000;
console.log(solution(n));
