const read = `500613009`;

const input = read.toString().trim().split('').map(Number);

console.log(input.sort((a, b) => b - a).join(''));

let result = '';
for (let i = 9; i > -1; i--) {
  for (const j of input) {
    if (j == i) result += i;
  }
}

console.log(result);
