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
