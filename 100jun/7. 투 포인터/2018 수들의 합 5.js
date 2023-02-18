const read = `15`;

const input = +read.toString().trim();

console.log(input);

let count = 0;
let e = 1;
let sum = 1;

for (let s = 1; s <= input; s++) {
  while (sum < input && e < input) {
    e++;
    sum += e;
  }

  if (sum === input) count++;
  sum -= s;
}

console.log(count);
