const read = `23`;

const input = read.toString().trim();

function solution(target) {
  let arr = [64];
  let sum = 0;

  while (sum !== target) {
    sum = arr.reduce((a, b) => a + b, 0);
    if (target < sum) {
      const shortStick = arr.pop() / 2;
      arr.push(shortStick);

      const splitSum = arr.reduce((a, b) => a + b, 0);
      if (target > splitSum) arr.push(shortStick);
    }
  }
  console.log(arr.length);
}

solution(+input);
