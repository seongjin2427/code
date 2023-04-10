const read = `15 28 19`;

const input = read.toString().trim().split(" ").map(Number);

function solution(date) {
  let [E, S, M] = date;
  let answer = 1;

  while (true) {
    if (
      (answer - E) % 15 === 0 &&
      (answer - S) % 28 === 0 &&
      (answer - M) % 19 === 0
    ) {
      console.log(answer);
      break;
    }
    answer++;
  }
}

solution(input);
