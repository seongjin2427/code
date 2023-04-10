const read = `6969699`;

const input = read.toString().trim();

const numbers = input.split("");
const arr = new Array(10).fill(0);

numbers.forEach((num) => {
  arr[num] += 1;
});

arr[6] = Math.ceil((arr[6] + arr[9]) / 2);
arr[9] = 0;
console.log(Math.max(...arr));
