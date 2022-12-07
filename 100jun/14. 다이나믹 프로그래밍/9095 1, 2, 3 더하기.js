const read = `3
4
7
10`;

const [n, ...numbers] = read
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

const num = [...Array(11)];

num[1] = 1;
num[2] = 2;
num[3] = 4;

for (let i = 4; i < 11; i++) {
  num[i] = num[i - 1] + num[i - 2] + num[i - 3];
}

for (const i of numbers) {
  console.log(num[i]);
}
