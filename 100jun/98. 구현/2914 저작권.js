const read = `38 24`;

const input = read.toString().trim().split(' ').map(Number);

let answer = input[0] * (input[1] - 1) + 1;

console.log(answer);
