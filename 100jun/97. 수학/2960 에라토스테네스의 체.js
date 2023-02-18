const read = `15 12`;

const [n, k] = read.toString().trim().split(" ").map(Number);

const arr = [];
for (let i = 2; i <= n; i++) arr.push(i);
console.log(arr);

let count = 0;
let prime, nth;

while (count < k) {
  prime = arr[0];
  arr.some((v) => {
    if (v % prime === 0) {
      arr.splice(arr.indexOf(v), 1);
      nth = v;
      count++;
    }
    if (count === k) return true;
  });
}
console.log(nth);
