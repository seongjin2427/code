const read = `koder topcoder`;

const input = read.toString().trim().split(" ");

const [A, B] = input;

let min = A.length;
for (let i = 0; i <= B.length - A.length; i++) {
  let curMin = 0;

  for (let j = i; j < i + A.length; j++) {
    if (A[j - i] !== B[j + 1]) curMin++;
  }

  min = Math.min(min, curMin);
}
console.log(min);
