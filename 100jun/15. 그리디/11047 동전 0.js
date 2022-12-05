const read = `10 4790
1
5
10
50
100
500
1000
5000
10000
50000`;

let [N, ...arr] = read.toString().trim().split('\n');

let [num, value] = N.split(' ').map((v) => +v);

arr.sort((a, b) => b - a);

const currency = arr
  .map((v) => {
    const result = Math.floor(value / v);
    if (result) {
      value -= result * v;
      return result;
    }
  })
  .filter((c) => c)
  .reduce((a, b) => a + b, 0);

console.log(currency);
