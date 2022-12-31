const read = `5
1,1
2,3
3,4
9,8
5,2`;

const input = read.toString().trim().split('\n');
input.shift();

for (let i = 0; i < input.length; i++) {
  const [one, two] = input[i].split(',').map(Number);
  console.log(one + two);
}
