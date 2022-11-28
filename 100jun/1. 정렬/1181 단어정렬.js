const read = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`;

const input = read.toString().trim().split('\n');
input.shift();

let words = [...new Set(input)].sort(
  (a, b) => a.length - b.length || a.localeCompare(b),
);

console.log(words.join('\n'));
