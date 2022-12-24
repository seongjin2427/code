const read = `3
0
1
2
3
4
5
6
7
8
9
10`;

const [T, ...tests] = read.toString().trim().split('\n');

for (const val of tests) {
  const arr = new Array(val);
  arr[0] = [1, 0];
  arr[1] = [0, 1];
  arr[2] = [arr[0][0] + arr[1][0], arr[0][1] + arr[1][1]];
  for (let i = arr.length - 1; i <= val; i++) {
    arr[i] = [arr[i - 2][0] + arr[i - 1][0], arr[i - 2][1] + arr[i - 1][1]];
  }
  console.log(arr[val].join(' '));
}
