function solution(n, m, section) {
  let count = 0;
  const arr = new Array(n - 1).fill(1);
  for (const index of section) arr[index - 1] = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) continue;

    for (let j = i; j < i + m; j++) {
      if (arr[j] === 1 || arr[j] === undefined) continue;
      arr[j] = 1;
    }
    i += m - 1;
    count++;
  }

  return count;
}

const n = 4;
const m = 1;
const section = [1, 2, 3, 4];

console.log(solution(n, m, section));
