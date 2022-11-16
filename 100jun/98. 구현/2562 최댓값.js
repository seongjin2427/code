const read = `3
29
38
12
57
74
40
85
61`;

const input = read.toString().trim().split('\n').map(Number);
const max = Math.max(...input);
const index = input.findIndex((i) => i === max);
console.log(`${max}\n${index+1}`);
