const read = `4 3
1 1 2 0
2 0 1 0
3 0 1 0
4 0 0 1`;

const input = read.toString().trim().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const contries = input
  .map((contry) => contry.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1] && a[2] === b[2]) return b[3] - a[3];
    if (a[1] === b[1]) return b[2] - a[2];
    return b[1] - a[1];
  });

const target = contries.find((con) => con[0] === K);
const filtered = contries.filter((con) => {
  if (
    target[0] !== con[0] &&
    target[1] === con[1] &&
    target[2] === con[2] &&
    target[3] === con[3]
  ) {
    return false;
  }
  return true;
});

console.log(filtered.findIndex((con) => con[0] === K) + 1);
