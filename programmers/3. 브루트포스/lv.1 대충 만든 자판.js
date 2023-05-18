function solution(keymap, targets) {
  const result = targets.map((target) => {
    return target.split("").map((t) => {
      const indexes = keymap.map((key) => key.indexOf(t));
      const noMinus = indexes.filter((v) => v !== -1);
      return noMinus.length ? Math.min(...noMinus) + 1 : -1;
    });
  });

  return result.map((target) => {
    return target.some((v) => v < 0) ? -1 : target.reduce((a, b) => a + b, 0);
  });
}

const k = ["BBBBA", "WDD"];
const t = ["WWWWWWWW", "ABC"];

console.log(solution(k, t));
