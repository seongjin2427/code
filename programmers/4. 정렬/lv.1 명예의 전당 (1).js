function solution(k, score) {
  let arr = [];
  const result = [];

  score.forEach((s) => {
    arr = [...arr, s].sort((a, b) => b - a).slice(0, k);
    result.push(arr.at(-1));
  });

  return result;
}

const k = 4;
const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

console.log(solution(k, score));
