const read = `7 3`;

let [N, K] = read.toString().trim().split(' ').map(Number);

let circle = Array.from({ length: N }, (_, i) => i + 1);
let arr = [];

while (circle.length) {
  for (let i = 0; i < K - 1; i++) {
    circle.push(circle.shift());
  }
  arr.push(circle.shift());
}
console.log(`<${arr.join(', ')}>`);
