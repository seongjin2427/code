const read = `20
0
50
80
77
110
56
48`;

const input = read.toString().trim().split("\n").map(Number);

const arr = input
  .map((n, index) => [index + 1, n])
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5)
  .sort((a, b) => a[0] - b[0]);

let sum = 0;

const problems = arr
  .map((a) => {
    sum += a[1];
    return a[0];
  })
  .join(" ");

console.log(sum);
console.log(problems);
