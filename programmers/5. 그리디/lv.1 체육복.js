function solution(n, lost, reserve) {
  const losted = lost.filter((l) => !reserve.includes(l));
  const reserved = reserve.filter((l) => !lost.includes(l));

  const students = new Array(n + 1).fill(1);
  losted.forEach((l) => (students[l] = 0));

  reserved.sort((a, b) => a - b);
  reserved.forEach((r) => {
    if (students[r] === 0) students[r] = 1;
    else if (students[r - 1] === 0) students[r - 1] = 1;
    else if (students[r + 1] === 0) students[r + 1] = 1;
  });

  return students.filter((v) => v).length - 1;
}

const n = 3;
const lost = [1, 2];
const reserve = [2, 3];

console.log(solution(n, lost, reserve));
