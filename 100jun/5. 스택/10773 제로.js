const read = `4
3
0
4
0`;

let [N, ...nums] = read.toString().trim().split('\n');

const stack = [];

let answer = 0;

nums.forEach((n) => {
  if (n === '0') stack.pop();
  else stack.push(n);
});

console.log(stack.reduce((a, b) => +a + +b, 0));
