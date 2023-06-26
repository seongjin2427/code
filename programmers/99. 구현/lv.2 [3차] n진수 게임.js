function solution(n, t, m, p) {
  let result = "";

  for (let i = 0, index = 0; i < t * m; i++) {
    const targetNumber = i.toString(n);

    for (let j = 0; j < targetNumber.length; j++) {
      if (result.length >= t) break;
      if (index++ % m === p - 1) result += targetNumber[j];
    }
  }
  return result.toUpperCase();
}

const n = 16;
const t = 16;
const m = 2;
const p = 1;

console.log(solution(n, t, m, p));
