const read = `5
5
2
3
4
1`;

const input = read.toString().trim().split('\n').map(Number);

input.shift();

input.sort((a, b) => a - b);
input.forEach((i) => console.log(i));
