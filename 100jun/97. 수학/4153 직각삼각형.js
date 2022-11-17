const read = `6 8 10
25 52 60
5 12 13
0 0 0`;

const input = read.toString().trim().split('\n');
input.pop();
input.forEach((i) => {
  const numbers = i.split(' ').map(Number);
  const maximum = Math.max(...numbers);
  const max = numbers.splice(numbers.indexOf(maximum), 1)[0];
  const sum = Math.pow(numbers[0], 2) + Math.pow(numbers[1], 2);
  console.log(sum === Math.pow(max, 2) ? 'right' : 'wrong');
});
