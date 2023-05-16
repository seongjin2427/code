const keypad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
];

const getDistance = (current, find) => {
  let [currentY, currentX, findY, findX] = [-1, -1, -1, -1];

  for (let i = 0; i < keypad.length; i++) {
    for (let j = 0; j < keypad[0].length; j++) {
      if (keypad[i][j] === current) [currentY, currentX] = [i, j];
      if (keypad[i][j] === find) [findY, findX] = [i, j];
      if (currentY > -1 && currentX > -1 && findY > -1 && findX > -1) break;
    }
  }
  return Math.abs(currentY - findY) + Math.abs(currentX - findX);
};

function solution(numbers, hand) {
  let answer = "";

  const leftSide = [1, 4, 7, "*"];
  const rightSide = [3, 6, 9, "#"];
  let [left, right] = ["*", "#"];

  const press = (n, h) => {
    h === "L" ? (left = n) : (right = n);
    answer += h;
  };

  numbers.forEach((n) => {
    if (leftSide.includes(n)) return press(n, "L");
    if (rightSide.includes(n)) return press(n, "R");

    const leftDistance = getDistance(left, n);
    const rightDistance = getDistance(right, n);

    if (leftDistance < rightDistance) return press(n, "L");
    if (leftDistance > rightDistance) return press(n, "R");

    press(n, hand === "left" ? "L" : "R");
  });

  return answer;
}

const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = "left";

console.log(solution(numbers, hand));
