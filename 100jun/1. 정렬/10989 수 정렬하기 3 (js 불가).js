const read = `10
5
2
3
1
4
2
3
5
1
7`;

const input = read.toString().trim().split('\n');
const length = +input.shift();

const arr = new Array(length + 1).fill(0);
input.forEach((n) => arr[n]++);

let result = '';

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    for (let j = 0; j < arr[i]; j++) {
      result += i;
    }
  }
}

console.log(result.split('').join('\n'));
