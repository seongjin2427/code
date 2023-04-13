const read = `65536 1000 35000
`;

const input = read.toString().trim().split(" ").map(Number);

const [N, jimin, hansu] = input;
let count = 0;

let round = Array.from({ length: N }, (_, i) => i);

round[jimin - 1] = -1;
round[hansu - 1] = -1;

let flag = true;
while (flag) {
  const nextRound = [];
  for (let i = 0; i < round.length; i += 2) {
    const first = round[i];
    const second = round[i + 1];

    if (first === second) {
      flag = false;
      break;
    }

    nextRound.push(Math.min(first, second));
  }

  round = nextRound;
  count++;
}

console.log(count);
