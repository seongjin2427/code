function solution(want, number, discount) {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const target = discount.slice(i, i + 10);
    if (
      want.every(
        (item, index) =>
          number[index] === target.filter((el) => el === item).length
      )
    )
      count++;
  }

  return count;
}

const w = ["banana", "apple", "rice", "pork", "pot"];
const n = [3, 2, 2, 2, 1];
const d = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];

console.log(solution(w, n, d));
