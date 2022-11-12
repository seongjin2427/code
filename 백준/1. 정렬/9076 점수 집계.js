const read = `4
10 8 5 7 9
10 9 10 9 5
10 3 5 9 10
1 2 3 6 9`;

const input = read.toString().trim().split('\n');
input.shift();

const scores = input.map((i) =>
  i
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
    .splice(1, 3),
);

scores.forEach((s) => {
  if (s[2] - s[0] >= 4) console.log('KIN');
  else console.log(s.reduce((a, b) => a + b));
});
