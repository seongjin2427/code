const read = `AABCDD
afzz
09121
a8EWg6
P5h3kx`;

const input = read.toString().trim().split("\n");

let answer = "";
const maxLength = Math.max(...input.map((n) => n.length));

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] === undefined) continue;
    answer += input[j][i];
  }
}

console.log(answer);
