function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i] * B[i];
  }

  return sum;
}

const a = [1, 4, 2];
const b = [5, 4, 4];

console.log(solution(a, b));
