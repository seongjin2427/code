const read = `10 500
93 181 245 214 315 36 185 138 216 295`;

const input = read.toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const cards = input[0].split(' ').map(Number);

let max = 0;
let sum = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (i === j || j === k || k === i) continue;
      sum = cards[i] + cards[j] + cards[k];
      if (sum <= M) {
        max = Math.max(max, sum);
      }
    }
  }
}

console.log(max);
