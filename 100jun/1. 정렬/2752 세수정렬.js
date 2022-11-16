const read = `3 1 2`;

const input = read.toString().trim().split(' ').map(Number);

input.sort((a, b) => a - b);
console.log(input.join(' '));

