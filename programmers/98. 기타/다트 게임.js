const d = "1D2S#10S";

const square = { S: 1, D: 2, T: 3 };

function solution(dartResult) {
  let number = 0;
  const scoreArr = [];

  for (let i = 0; i < dartResult.length; i++) {
    const target = dartResult[i];

    if (target >= 0 && target <= 9) {
      if (target == 1 && dartResult[i + 1] == 0) {
        number = 10;
        i++;
      } else {
        number = target;
      }
    } else if (target === "S" || target === "D" || target === "T") {
      scoreArr.push(number ** square[target]);
    } else if (target === "#") {
      scoreArr[scoreArr.length - 1] *= -1;
    } else if (target === "*") {
      scoreArr[scoreArr.length - 1] *= 2;
      scoreArr[scoreArr.length - 2] *= 2;
    }
  }

  console.log(scoreArr.reduce((a, b) => a + b));
}

solution(d);
