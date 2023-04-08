const read = `2
I am happy today
We want to win the first prize`;

const input = read.toString().trim().split("\n");

const [T, ...strs] = input;

const arr = strs
  .map((str) =>
    str
      .split(" ")
      .map((s) => s.split("").reverse().join(""))
      .join(" ")
  )
  .join("\n");

console.log(arr);
