const read = `2 3
1 2 4
8 16 32
3
1 1 2 3
1 2 1 2
1 3 2 3`;

const input = read.toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input.shift().split(" ").map(Number));
}

const [K, ...cases] = input.map((c) => c.split(" ").map(Number));

cases.forEach((c) => {
  const [i, j, x, y] = c;
  let sum = 0;

  for (let row = i - 1; row < x; row++) {
    for (let column = j - 1; column < y; column++) {
      sum += arr[row][column];
    }
  }
  console.log(sum);
});
