const read = `7
0 0 0 1 0 0 0
0 0 0 0 0 0 1
0 0 0 0 0 0 0
0 0 0 0 1 1 0
1 0 0 0 0 0 0
0 0 0 0 0 0 1
0 0 1 0 0 0 0`;

const [N, ...map] = read.toString().trim().split('\n');

const NN = +N;
let arr = map.map((m) => m.split(' ').map((v) => +v));

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][k] && arr[k][j]) arr[i][j] = 1;
    }
  }
}

console.log(arr.map((m) => m.join(' ')).join('\n'));
