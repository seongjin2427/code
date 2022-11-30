const read = `5
5
4
3
2
1`;

let input = read.toString().trim().split('\n').map(Number);
input.shift();

console.log(input.sort((a, b) => a - b).join('\n'));
