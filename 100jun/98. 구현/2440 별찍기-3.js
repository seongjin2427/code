const read = '5';

const input = +read.toString().trim();

for (let i = 0; i < input; i++) {
  console.log('*'.repeat(input - i));
}
