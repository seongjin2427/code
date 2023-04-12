const read = `3
25
10
15
`;

const input = read.toString().trim().split("\n").map(Number);

const [N, ...ropes] = input;

const sorted = ropes.sort((a, b) => b - a);

const arr = [];
let max = 0;
let sum = 0;
let min = 0;

for (let i = 0; i < sorted.length; i++) {
  arr.push(sorted[i]);
  sum += sorted[i];
  min = Math.min(...arr) * arr.length;
  max = max > min ? max : min;
}

console.log(max);
