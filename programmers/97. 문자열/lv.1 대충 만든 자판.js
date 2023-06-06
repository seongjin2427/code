function solution(s, skip, index) {
  const skipArr = skip.split("").map((s) => s.charCodeAt());

  return s
    .split("")
    .map((c) => {
      let char = c.charCodeAt();

      for (let i = 0; i < index; i++) {
        char++;
        if (char === 123) char = 97;
        if (skipArr.includes(char)) i--;
      }

      return String.fromCodePoint(char);
    })
    .join("");
}

const s = "zz";
const skip = "a";
const i = 5;

console.log(solution(s, skip, i));


// function solution(keymap, targets) {
//   return targets.map((target) => {
//     const result = target.split("").map((t) => {
//       const mapped = keymap.map((k) => k.indexOf(t) + 1);
//       return -mapped.every((v) => !v) || Math.min(...mapped.filter((v) => v));
//     });
//     return result.includes(-1) ? -1 : result.reduce((a, b) => a + b);
//   });
// }