const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

function solution(k, m, score) {
  let result = 0;
  const sorted = score.sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i += m) {
    if (sorted.length < i + m) break;
    result += sorted[i + m - 1] * m;
  }

  return result;
}

console.log(solution(k, m, score));
