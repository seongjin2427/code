const read = `24 18`;

let [N, M] = read.toString().trim().split(' ').map(Number);

let i = N;
let j = M;

while (i % j !== 0) {
  let n = i % j;
  if (n !== 0) {
    i = j;
    j = n;
  }
}

console.log(j);
console.log((N * M) / j);
