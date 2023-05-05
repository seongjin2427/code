const bonus = {
  S: 1,
  D: 2,
  T: 3,
};

function solution(dartResult) {
  let number = 0;
  const arr = [];

  for (let i = 0; i < dartResult.length; i++) {
    const target = dartResult[i];
    if (+target < 10) {
      if (+dartResult.substring(i, i + 2) === 10) {
        number = 10;
        i++;
      } else {
        number = +target;
      }
    } else if (target === "S" || target === "D" || target === "T") {
      arr.push(number ** bonus[target]);
    } else if (target === "*") {
      arr[arr.length - 1] *= 2;
      arr[arr.length - 2] *= 2;
    } else if (target === "#") {
      arr[arr.length - 1] *= -1;
    }
  }

  return arr.reduce((a, b) => a + b, 0);
}

const dartResult = "1D2S#10S";

solution(dartResult);
