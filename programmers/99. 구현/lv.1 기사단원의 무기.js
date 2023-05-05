function solution(number, limit, power) {
  let answer = 0;

  const divide = (n) => {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
      if (i * i == n) count++;
      else if (n % i == 0) count += 2;
    }
    return count;
  };

  for (let i = 1; i <= number; i++) {
    let p = divide(i);
    answer += p > limit ? power : p;
  }

  return answer;
}

const number = 10;
const limit = 3;
const power = 2;

console.log(solution(number, limit, power));

// (1)[1] = 1;
// (2)[(1, 2)] = 2;
// (3)[(1, 3)] = 2;
// (4)[(1, 2, 4)] = 3;
// (5)[(1, 5)] = 2;
// (6)[(1, 2, 3, 6)] = 4(2);
// (7)[(1, 7)] = 2;
// (8)[(1, 2, 4, 8)] = 4(2);
// (9)[(1, 3, 9)] = 3;
// (10)[(1, 2, 5, 10)] = 4(2);
// (11)[(1, 11)] = 2;
// (12)[(1, 2, 3, 4, 6, 12)] = 6;
