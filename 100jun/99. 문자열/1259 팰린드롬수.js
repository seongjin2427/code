const read = `121
1231
12421
0`;

const input = read.toString().trim().split('\n');
input.pop();

input.forEach((i) => {
  const reverse = i.split('').reverse().join('');
  console.log(i === reverse ? 'yes' : 'no');
});
