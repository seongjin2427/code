function solution(k, m, score) {
  let sum = 0;
  const sorted = score.sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i += m) {
    if (sorted.length < i + m) continue;
    sum += sorted[i + m - 1] * m;
  }
  return sum;
}

const k = 3;
const m = 4;
const score = [1, 2, 3, 1, 2, 3, 1];

console.log(solution(k, m, score));
