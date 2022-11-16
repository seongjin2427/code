const read = `8 1 7 2 6 3 5 4`;

const input = read.toString().trim().split(' ').map(Number);

let count = 0;
for (let i = 0; i < 7; i++) {
  if (input[i] < input[i + 1]) count++;
}

const result = { 0: 'descending', 7: 'ascending' }[count];
console.log(result || 'mixed');
