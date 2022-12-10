const read = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`;

const [N, ...confs] = read.toString().trim().split('\n');

const sorted = confs
  .map((c) => c.split(' ').map((v) => +v))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

let count = 1;
let temp = sorted.shift();
for (const conf of sorted) {
  if (temp[1] <= conf[0]) {
    temp = conf;
    count++;
  }
}

console.log(count);
