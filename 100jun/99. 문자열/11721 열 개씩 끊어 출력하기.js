const read = `BaekjoonOnlineJudge`;

const input = read.toString().trim();

for (let i = 0; i <= input.length; i += 10) {
  console.log(input.slice(i, i + 10));
}
