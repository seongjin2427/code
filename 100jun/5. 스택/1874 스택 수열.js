const read = `5
1
2
5
3
4`;

const [n, ...arr] = read
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

let count = 1;
const stack = [];
let result = [];

for (let i = 0; i < n; i++) {
  const data = arr[i];

  while (count <= data) {
    stack.push(count);
    count++;
    result.push('+');
  }
  if (stack[stack.length - 1] === data) {
    stack.pop();
    result.push('-');
  } else {
    result = ['NO'];
    break;
  }
}

console.log(result.join('\n'));
