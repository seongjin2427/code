const s = "-1 -2 -3 -4";

function solution(s) {
  const arr = s.split(" ").sort((a, b) => a - b);
  return `${arr[0]} ${arr[arr.length - 1]}`;
}

console.log(solution(s));
