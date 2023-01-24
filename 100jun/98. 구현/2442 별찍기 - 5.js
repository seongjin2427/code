const read = `5`;

const input = read.toString().trim();
let output = '';
for (let i = 1; i <= input; i++) {
  output += ' '.repeat(input - i) + '*'.repeat(i * 2 - 1) + '\n'
}

console.log(output);