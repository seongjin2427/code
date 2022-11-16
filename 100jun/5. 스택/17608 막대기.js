const read = `5
5
4
3
2
1`;

const input = read.toString().trim().split('\n').map(Number);

const length = input.shift();

let count = 0;
let max = 0;
for (let i = 0; i < length; i++) {
  const test = input.pop();
  if (test > max) count++;
  max = Math.max(max, test);
}

console.log(count);
