const read = `5
3 1 4 3 2`;

const [N, people] = read.toString().trim().split('\n');

const sorted = people
  .split(' ')
  .sort((a, b) => a - b)
  .map(Number);

let sum = 0;
for (let i = 0; i < sorted.length; i++) {
  sum += sorted.slice(0, i + 1).reduce((a, b) => a + b, 0);
}
console.log(sum);
