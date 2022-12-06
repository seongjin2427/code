const read = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`;

let [, M, , N] = read.toString().trim().split('\n');

const sanguen = M.split(' ').map(Number);
let find = N.split(' ').map(Number);

const map = new Map();

sanguen.forEach((f) => {
  if (map.has(f)) map.set(f, map.get(f) + 1);
  else map.set(f, 1);
});

const answer = [];
find.forEach((v) => answer.push(map.get(v) || 0));

console.log(answer.join(' '));
