const n = 45;

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

solution(n);
