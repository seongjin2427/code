const read = `3 7`;

const input = read.toString().trim().split(" ").map(Number);

const [A, B] = input;
const arr = [];

for (let i = 1; i < 50; i++) {
  for (let j = 0; j < i; j++) {
    if (arr.length === 1000) break;
    arr.push(i);
  }
}

console.log(arr.slice(A - 1, B).reduce((a, b) => a + b, 0));
