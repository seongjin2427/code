const read = `20 30 10`;

const input = read.toString().trim().split(' ').map(Number);

input.sort((a, b) => b - a);
console.log(input[1]);
