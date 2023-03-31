const t = "500220839878";
const p = "7";

function solution(t, p) {
  let count = 0;
  let value = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    value = t.slice(i, i + p.length);
    if (value <= p) count++;
  }

  return count;
}

console.log(solution(t, p));
