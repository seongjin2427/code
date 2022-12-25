const read = `5
2 4 -10 4 -9`;

const [M, cases] = read.toString().trim().split('\n');

const arr = cases.split(' ');
const unique = [...new Set(arr)].map(Number).sort((a, b) => a - b);

const dictionary = {};
unique.forEach((v, idx) => (dictionary[v] = idx));

const answer = [];
arr.forEach((v) => answer.push(dictionary[v]));
console.log(answer.join(' '));
