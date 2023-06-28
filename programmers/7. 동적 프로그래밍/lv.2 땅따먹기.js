function solution(land) {
  let answer = 0;

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      const arr = [...land[i - 1]];

      arr[j] = 0;
      land[i][j] += Math.max(...arr);
      answer = Math.max(land[i][j], answer);
    }
  }

  return answer;
}

const l = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];

console.log(solution(l));
