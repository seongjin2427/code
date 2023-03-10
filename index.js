const read = `5
1 1 1 6 0
2 7 8 3 1
`;

const input = read.toString().trim().split("\n");

console.log(input);

const [N, A, B] = input;

const AA = A.split(" ").map(Number);
const BB = B.split(" ").map(Number);

let sum = 0;

for (let i = 0; i < +N; i++) {
  const aMin = Math.min(...AA);
  const bMax = Math.max(...BB);
  sum += aMin * bMax;

  AA.splice(AA.indexOf(aMin), 1);
  BB.splice(BB.indexOf(bMax), 1);
}

console.log(sum);

// 1.
// const AA = A.split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// const BB = B.split(" ")
//   .map(Number)
//   .sort((a, b) => b - a);
// const BBB = B.split(" ").map(Number);

// let sum = 0;

// console.log(AA, BB, BBB);

// BBB.forEach((b) => {
//   const index = BB.indexOf(b);
//   const result = AA[index] * BB[index];
//   console.log(index, result, BB);
//   AA.splice(index, 1);
//   BB.splice(index, 1);
//   sum += result;
// });

// console.log(sum);
