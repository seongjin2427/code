const read = `15`;

const input = read.toString().trim();

let n = +input;

let a = 0;
let b = 1;
let c = 1;

while (n > 0) {
  a = b;
  b = c;
  c = a + b;
  n -= 1;
}

console.log(a);
