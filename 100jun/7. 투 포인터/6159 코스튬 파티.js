const read = `4 6
3
5
2
1
`;

const input = read.toString().trim().split("\n");

const [N, S] = input.shift().split(" ").map(Number);
const cows = input.map(Number).sort((a, b) => a - b);

function solution(n, s, array) {
  let j = n - 1;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (array[i] > parseInt(s / 2)) break;
    while (array[i] + array[j] > s) j -= 1;
    count += j - i;
  }

  return count;
}

console.log(solution(N, S, cows));
