const [a, b, n] = [3, 1, 20];

function solution(a, b, n) {
  let answer = 0;

  function calculate(bottles) {
    const receiveBottles = Math.floor(bottles / a) * b;
    answer += receiveBottles;

    if (receiveBottles <= 0) return;
    calculate(receiveBottles + (bottles % a));
  }

  calculate(n);
  return answer;
}

console.log(solution(a, b, n));
