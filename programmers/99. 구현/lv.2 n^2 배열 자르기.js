function solution(n, left, right) {
  const answer = [];

  for (let i = left; i < n ** 2; i++) {
    const j = Math.floor(i / n);
    const k = i % n;
    answer.push(k <= j ? j + 1 : k + 1);
    if (right <= i) break;
  }

  return answer.slice(0, right + 1);
}

const n = 4;
const l = 7;
const r = 14;

console.log(solution(n, l, r));
