const read = `XX.XXXXXXXXXX..XXXXXXXX...XXXXXX`;

const input = read.toString().trim();

function solution(N) {
  const A = "AAAA";
  const B = "BB";

  let answer = "";
  let index = 0;
  let temp = "";

  while (index <= N.length) {
    if (N[index] === "." || N[index] === undefined) {
      const tempLength = temp.length;

      const tempLeft = tempLength % 4;
      if (tempLeft === 1 || tempLeft === 3) return -1;

      const aLength = parseInt(tempLength / A.length);
      const bLength = parseInt((tempLength % A.length) / B.length);

      for (let i = 0; i < aLength; i++) {
        answer += A;
      }
      for (let i = 0; i < bLength; i++) {
        answer += B;
      }

      if (index < N.length) answer += ".";
      temp = "";
    } else {
      temp += N[index];
    }
    index++;
  }
  return answer;
}

console.log(solution(input));
