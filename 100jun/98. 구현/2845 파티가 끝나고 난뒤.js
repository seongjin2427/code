const read = `5 20
99 101 1000 0 97`;

const [space, news] = read.toString().trim().split('\n');
const s = space
  .split(' ')
  .map((v) => +v)
  .reduce((a, b) => a * b, 1);
const n = news.split(' ').map((v) => +v);

const answer = [];
n.forEach((ns) => {
  answer.push(ns - s);
});

console.log(answer.join(' '));
