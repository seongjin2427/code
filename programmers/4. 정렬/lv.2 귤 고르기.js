function solution(k, tangerine) {
  const arr = [];
  tangerine.forEach((t) => (arr[t] ? arr[t]++ : (arr[t] = 1)));
  arr.sort((a, b) => b - a);

  return arr.filter((t) => {
    if (k <= 0) return;
    k -= t;
    return k || 1;
  }).length;
}

const k = 6;
const t = [1, 3, 2, 5, 4, 5, 2, 3];
console.log(solution(k, t));
