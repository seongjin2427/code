const read = `baekjoon`;

const input = read.toString().trim();

const arr = new Array(26).fill(0);

input.split('').forEach((s) => {
  const index = s.charCodeAt() - 97;
  arr[index]++;
});

console.log(arr.join(' '));
