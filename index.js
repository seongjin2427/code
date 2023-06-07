const s = "abcde";
console.log(
  s.slice(parseInt(s.length / 2) - (s.length % 2 ? 0 : 1), s.length / 2 + 1)
);
