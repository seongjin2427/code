function solution(n, words) {
  const history = [words[0]];

  for (let i = 1; i < words.length; i++) {
    if (history.includes(words[i]) || words[i - 1].at(-1) !== words[i][0]) {
      return [(i % n) + 1, Math.ceil(n % 2 === 0 ? i / n + 1 : i / n)];
    }

    history.push(words[i]);
  }
  return [0, 0];
}

const n = 5;
const w = [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
];

console.log(solution(n, w));
