const read = `01234567
12345678`;

const [first, second] = read.toString().trim().split('\n');

let merged = '';

for (let i = 0; i < first.length; i++) {
  merged += first[i] + second[i];
}

while (merged.length !== 2) {
  let sum = '';

  for (let i = 0; i < merged.length - 1; i++) {
    sum += (+merged[i] + +merged[i + 1]) % 10;
  }

  merged = sum;
}

console.log(merged);
