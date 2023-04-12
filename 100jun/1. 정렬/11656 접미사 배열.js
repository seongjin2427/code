const read = `baekjoon`;

const input = read.toString().trim();

const arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input.slice(i));
}

console.log(arr.sort((a, b) => a.localeCompare(b)).join("\n"));
