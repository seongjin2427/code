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

// 시도
// // 1.
// const arr = Array.from({ length: n + 1 }, (_, i) => i);

// arr[0] = Infinity;
// arr[1] = Infinity;

// const filtered = [];

// function solution(arr) {
//   for (let i = 2; i < arr.length; i++) {
//     if (filtered.length - 1 === k) break;

//     // 2.
//     const min = Math.min(...arr);

//     // 3. 4.
//     if (min !== Infinity) {
//       filtered.push(min);
//       arr[min] = Infinity;
//     }

//     for (let j = 2 * i; j < arr.length; j += i) {
//       if (filtered.length - 1 === k) break;

//       if (arr[j] !== Infinity) {
//         filtered.push(arr[j]);
//         arr[j] = Infinity;
//       }
//     }
//   }
// }

// solution(arr);

// console.log(n === 1 ? 1 : filtered[k - 1]);
