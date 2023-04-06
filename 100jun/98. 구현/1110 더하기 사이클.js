const read = 1;

const input = read.toString().trim();

function solution(num) {
  let temp = num;
  let count = 0;

  while (true) {
    const origin = Math.floor(temp / 10);
    const rest = temp % 10;
    const sumRest = (origin + rest) % 10;

    temp = String(rest) + String(sumRest);

    count++;
    if (temp == num) break;
  }
  console.log(count);
}

solution(+input);
