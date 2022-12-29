const read = `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100`;

const [n, ...input] = read.toString().trim().split('\n');

const [h, w] = n.split(' ').map((v) => +v);
const makeArray = (arr) => arr.map((v) => v.split(' ').map((a) => +a));
const first = makeArray(input.splice(0, h));
const second = makeArray(input);

for (let i = 0; i < h; i++) {
  const answer = [];
  for (let j = 0; j < w; j++) {
    answer.push(first[i][j] + second[i][j]);
  }
  console.log(answer.join(' '));
}
