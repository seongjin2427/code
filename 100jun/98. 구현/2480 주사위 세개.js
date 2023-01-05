const read = '6 2 5';

const input = read
  .toString()
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

function solution(arr) {
  const [a, b, c] = arr;

  if (a === b && b === c) {
    console.log(10000 + a * 1000);
  } else if (a === b || b === c) {
    console.log(1000 + b * 100);
  } else {
    console.log(100 * c);
  }
}

solution(input);
