const read = `472
385`;

const input = read.toString().trim().split('\n');

const first = +input[0];
const second = input[1].split('').map((v) => +v);
console.log(first * second[2]);
console.log(first * second[1]);
console.log(first * second[0]);
console.log(first * second.join(''));
