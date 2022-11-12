const read = `1954632`;

const input = read.toString().trim();

let count = 0;
function recursion(num) {
  if (num < 10) return num;
  num = num
    .toString()
    .split('')
    .reduce((a, b) => +a + +b, 0);
  count++;
  return recursion(num);
}

const result = recursion(input);
console.log(count);
console.log(result % 3 === 0 ? 'YES' : 'NO');
