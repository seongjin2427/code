const read = `5`;

const input = read.toString().trim();

let value = '*'.repeat(Number(input)).split('');
console.log(value.join(''));
for (let i = 0; i < Number(input) - 1; i++) {
  value[i] = ' ';
  console.log(value.join(''));
}
