function solution(n, a, b) {
  var count = 1;

  while (true) {
    if ((a % 2 === 0 && a + 1 === b) || (b % 2 === 0 && b + 1 === a)) {
    } else if (Math.abs(a - b) === 1) break;

    count++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }

  return count;
}

const n = 8;
const a = 4;
const b = 5;
console.log(solution(n, a, b));
