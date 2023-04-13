const read = `4
300 1 1 300
`;

const input = read.toString().trim().split("\n");

function divide(a, b) {
  let rest;
  while (a % b !== 0) {
    rest = a % b;

    if (rest !== 0) {
      a = b;
      b = rest;
    }
  }
  return b;
}

const [N, rings] = input;
let answer = "";

const [first, ...restRings] = rings.split(" ").map(Number);

restRings.forEach((ring) => {
  const num = divide(first, ring);
  answer += `${first / num}/${ring / num}\n`;
});

console.log(answer);
