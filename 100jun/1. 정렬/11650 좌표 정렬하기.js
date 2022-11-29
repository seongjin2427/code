const read = `5
3 4
1 1
1 -1
2 2
3 3`;

let input = read.toString().trim().split('\n');
input.shift();
console.log(input);
const sorted = input.sort((a, b) => {
  let A = a.split(' ');
  let B = b.split(' ');
  return A[0] === B[0] ? A[1] - B[1] : A[0] - B[0];
});
console.log(sorted.join('\n'));
