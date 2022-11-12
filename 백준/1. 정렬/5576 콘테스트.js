const read = `23
23
20
15
15
14
13
9
7
6
25
19
17
17
16
13
12
11
9
5`;

const input = read.toString().trim().split('\n').map(Number);

const calculate = (arr) =>
  arr
    .sort((a, b) => b - a)
    .splice(0, 3)
    .reduce((a, b) => a + b);

const W = calculate(input.splice(0, 10));
const K = calculate(input);

console.log(W, K);
