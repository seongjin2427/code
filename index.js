const read = `11 12 2 24 10
16 1 13 3 25
6 20 5 21 17
19 4 8 14 9
22 15 7 23 18
5 10 7 16 2
4 22 8 17 13
3 18 1 6 25
12 19 23 14 21
11 24 9 20 15`;

const input = read.toString().trim().split("\n");

const bingoBoard = [];
const callNumber = [];

for (let i = 0; i < input.length; i++) {
  if (i < 5) bingoBoard.push(input[i].split(" ").map(Number));
  else callNumber.push(input[i].split(" ").map(Number));
}
console.log(bingoBoard);
console.log(callNumber);

const isHorizontalBingo = (i) => +bingoBoard[i].every((n) => n === 0);
const isVerticalBingo = (i) => {
  let sum = 0;
  for (let k = 0; k < bingoBoard[0].length; k++) {
    sum += bingoBoard[k][i];
    if (sum !== 0) return 0;
  }
  return 1;
};
const isTiltBingo = () => {
  let result = 0;
  let sum = 0;
  for (let k = 0; k < bingoBoard.length; k++) {
    sum += bingoBoard[k][k];
  }
  if (sum === 0) result++;
  for (let k = bingoBoard.length - 1; k > 0; k--) {
    sum += +bingoBoard[bingoBoard.length - 1 - k][k];
  }
  if (sum === 0) result++;
  return result;
};
