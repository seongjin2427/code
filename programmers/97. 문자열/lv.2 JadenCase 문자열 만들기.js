function solution(s) {
  return s
    .split(" ")
    .map((c) => (c ? c[0].toUpperCase() + c.slice(1).toLowerCase() : ""))
    .join(" ");
}

const s = "3people unFollowed        3       3me";

console.log(solution(s));

console.log("".charAt(0));
console.log(""[0]);
